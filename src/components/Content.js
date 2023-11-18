import React from "react";
import person1 from "../assets/images/1.jpeg";
import person2 from "../assets/images/2.jpeg";
import person3 from "../assets/images/3.jpeg";

function Content() {
  return (
    <div>
      <div class="container">
        <div class="box box-25 box-pink">
          <span className="number">01</span>
          <div className="text-two">
            <div>
              <div className="img-container">
                <img
                  src={person1}
                  alt="hgf"
                  className="profile-image image1"
                ></img>
                <img
                  src={person2}
                  alt="hgf"
                  className="profile-image image2"
                ></img>
                <img
                  src={person3}
                  alt="hgf"
                  className="profile-image image3"
                ></img>
              </div>
            </div>
            <div>
              <p>Learn from best members</p>
            </div>
            <button>Start Learning</button>
          </div>
        </div>
        <div class="box box-25 box-purple">
          <span className="number">02</span>
          <div className="text-one">
            <ul className="list-of-next">
              <li>
                Free Edit{" "}
                <span class="material-symbols-outlined">arrow_downward</span>
              </li>
              <li>
                Interactive{" "}
                <span class="material-symbols-outlined">arrow_downward</span>
              </li>
              <li>
                Easy Interface{" "}
                <span class="material-symbols-outlined">arrow_downward</span>
              </li>
              <li>
                Compare To Other
                <span class="material-symbols-outlined">arrow_downward</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="box box-50 box-yellow">
          <span className="number">03</span>
          <div className="text-three">
            <div className="releases">
              <span>+20K</span>
              <p>Glass Pattern Generated this week in the first release.</p>
              <div>
                <span class="material-symbols-outlined">new_releases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
