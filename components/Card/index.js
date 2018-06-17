import classNames from "classnames";
import CardFooter from "./../CardFooter";

import "./index.scss";

const getClass = ({ className }) => classNames("card", className);

const Card = ({ title, repo, icon, downloads, className }) => (
  <div className={getClass({ className })}>
    <img src={icon} className="card__icon" />
    <h1 className="card__name">{title}</h1>
    <h2 className="card__repo">{repo}</h2>
    <h3 className="card__downloads">{downloads}</h3>
    <h4 className="card__downlads-subtitle">downloads</h4>
    <CardFooter
      actions={[
        { name: "Stats", href: "#" },
        { name: "Download", href: "#" },
        { name: "Repo", href: "#" },
      ]}
    />
  </div>
);

export default Card;
