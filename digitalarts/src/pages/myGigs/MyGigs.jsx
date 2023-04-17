import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function MyGigs() {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();
console.log(currentUser)
  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Arts</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Post New</button>
              </Link>
            )}
          </div>
          <table>
            <thead>
            <tr>
              <th>Art</th>
              <th>Name</th>
              <th>Price(₹.)</th>
              <th>Sales</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {data.map((gig) =>(
              <tr key={gig._id}>
              <td>
                <img
                  className="image"
                  src={gig.cover}
                  alt=""
                />
              </td>
              <td>{gig.title}</td>
              <td>{gig.price}</td>
              <td>{gig.sales}</td>
              <td>
                <img
                  className="delete"
                  src="./img/delete.png"
                  alt=""
                  onClick={() => handleDelete(gig._id)}
                />
              </td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
