import React from "react";
import ProjectCard from "./ProjectCard.json";

// function Card() {
//   return (
//     <>
//       <div className="row projectbox">
//         <div className="col-sm col-md col-lg">
//           <a href="https://mwebb2321.github.io/teamAwesome/" target="_blank">
//             <img
//               src="../NewPortfolio/teamAwesome.png"
//               link
//               rel="https://github.com/MWebb2321/teamAwesome"
//               style={{ width: "50%; height: auto; border: #444 solid 1px" }}
//             />
//           </a>
//           <p>
//             This was our first group project, in which we made a useful resource
//             for new coders. We wanted to create an all-in-one site for the
//             basics of coding.
//           </p>
//           <a href="https://github.com/MWebb2321/teamAwesome" target="_blank">
//             Link to Repo
//           </a>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// }

function Card() {
  return (
    <>
      <h1>Project List</h1>
      <ProjectCard
        name={ProjectCard[0].name}
        image={ProjectCard[0].image}
        description={ProjectCard[0].description}
        link={ProjectCard[0].link}
      />
      <ProjectCard
        name={ProjectCard[1].name}
        image={ProjectCard[1].image}
        description={ProjectCard[1].description}
        link={ProjectCard[1].link}
      />
      <ProjectCard
        name={ProjectCard[2].name}
        image={ProjectCard[2].image}
        description={ProjectCard[2].description}
        link={ProjectCard[2].link}
      />
      <ProjectCard
        name={ProjectCard[3].name}
        image={ProjectCard[3].image}
        description={ProjectCard[3].description}
        link={ProjectCard[3].link}
      />
      <ProjectCard
        name={ProjectCard[4].name}
        image={ProjectCard[4].image}
        description={ProjectCard[4].description}
        link={ProjectCard[4].link}
      />
    </>
  );
}

export default Card;
