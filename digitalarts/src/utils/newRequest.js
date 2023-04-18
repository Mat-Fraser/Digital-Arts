import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://digital-arts.onrender.com/",
  withCredentials: true,
});

export default newRequest;
