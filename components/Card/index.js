import classNames from "classnames";
import CardFooter from "./../CardFooter";

import "./index.scss";

const getClass = ({ className }) => classNames("card", className);

const Card = ({
  title,
  repo,
  icon,
  downloads = "0",
  className,
  countType = "total",
  githubRepo,
  downloadUrl,
}) => (
  <div className={getClass({ className })}>
    <img src={icon} className="card__icon" />
    <h1 className="card__name">{title}</h1>
    <h2 className="card__repo">{repo}</h2>
    <h3 className="card__downloads">
      {new Intl.NumberFormat().format(downloads)}
    </h3>
    <h4 className="card__downlads-subtitle">{countType} downloads</h4>
    <CardFooter
      actions={[
        { name: "Download", href: downloadUrl },
        { name: "Repo", href: githubRepo },
      ]}
    />
  </div>
);

export default Card;
