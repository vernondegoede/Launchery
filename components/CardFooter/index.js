import "./index.scss";

const CardFooter = ({ actions }) => (
  <ul className="card-footer">
    {actions.map(({ href, name }) => (
      <li className="card-footer__item" key={`action-${name}`}>
        <a href={href}>{name}</a>
      </li>
    ))}
  </ul>
);

export default CardFooter;
