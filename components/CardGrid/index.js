import Card from "./../Card";

import "./index.scss";

const CardGrid = ({ projects }) => (
  <div className="card-grid">
    {projects.map(project => (
      <div className="card-grid__item">
        <Card {...project} className="card-grid__item-inner" />
      </div>
    ))}
  </div>
);

export default CardGrid;
