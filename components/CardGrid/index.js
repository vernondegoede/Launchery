import CardContainer from "./../../containers/CardContainer";

import "./index.scss";

const CardGrid = ({ projects }) => (
  <div className="card-grid">
    {projects.map(project => (
      <div className="card-grid__item" key={`project-${project.title}`}>
        <CardContainer {...project} className="card-grid__item-inner" />
      </div>
    ))}
  </div>
);

export default CardGrid;
