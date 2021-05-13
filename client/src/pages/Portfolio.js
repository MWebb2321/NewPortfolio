import projects from "../components/ProjectCard.json";
import Card from "../components/Card.js";

function Portfolio() {
  return (
    <section className="container">
      <header className="row">
        <h1 className="center-mobile">Portfolio</h1>
      </header>

      <hr className="solid" />

      <section className="portfolioImage">
        <section className="row">
          {projects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Portfolio;
