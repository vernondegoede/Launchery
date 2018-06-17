import CardGrid from "./../components/CardGrid";

import "./../styles/index.scss";

const projects = [
  {
    title: "Caption",
    repo: "gielcobben/caption",
    downloads: "222,103",
    icon: "http://vernondegoede.com/static/open-source/caption.png",
  },
  {
    title: "verminal",
    repo: "defringe/verminal",
    downloads: "11,103",
    icon: "http://vernondegoede.com/static/open-source/verminal.png",
  }
];

export default () => (
  <>
    <CardGrid projects={projects} />
  </>
);
