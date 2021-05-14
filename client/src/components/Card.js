import React from "react";

function Card({ project }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <a href="https://mwebb2321.github.io/teamAwesome/" target="_blank">
          <img
            src={project.image}
            link
            rel={project.link}
            style={{ width: "50%", height: "auto", border: "#444 solid 1px" }}
          />
        </a>
        <p>{project.description}</p>
        <a href={project.link} target="_blank">
          Link to Repo
        </a>
      </div>
      <hr />
    </>
  );
}

// function Card({ project }) {
//   return (
//     <div className="col-md-6 col-lg-6 col-xl-4 overlay-img">
//       <img className="cropped" src={project.image} />

//       <div className="overlay">
//         <div className="overlay-text">
//           <a href={project.link} style={{ color: "black" }}>
//             {project.description}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Card;
