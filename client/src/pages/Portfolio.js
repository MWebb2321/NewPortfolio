import projects from "../Projects.json";
import Card from "../components/Card.js";

function Portfolio() {
  return (
    <section className="container">
      <header className="row">
        <h1 className="center-mobile">Portfolio</h1>
      </header>

      <hr className="solid" />

      <section className="portfolioImage port-container">
        <div className="row projectbox">
          {projects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
