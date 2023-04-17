import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="sampling">Top Arts</div>
      <hr />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Buy the best quality digital art directly from the artists.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best designs and variety.
            </div>
            <p>
            Artist around the globe can sell their art here in one place.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Anyone can buy and sell.
            </div>
            <p>
            Create an account as a user or seller and buy or sell your own piece of art.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay directly to the artist for the art
            </div>
            <p>
            We have secured payment and the artist got paid with no extra cost or charges applied 
            </p>
          </div>
          <div className="item">
            <img src="https://i.ibb.co/bQ5zKRt/c0.png"/>
          </div>
        </div>
      </div>
      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
