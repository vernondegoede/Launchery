import CardGrid from "./../components/CardGrid";

import "./../styles/index.scss";

const projects = [
  {
    title: "Caption",
    repo: "gielcobben/caption",
    downloads: "222,103",
    icon: "http://vernondegoede.com/static/open-source/caption.png",
    type: "github",
  },
  {
    title: "verminal",
    repo: "verminal",
    downloads: "11,103",
    icon: "http://vernondegoede.com/static/open-source/verminal.png",
    type: "npm",
  },
];

export default () => (
  <>
    <CardGrid projects={projects} />
  </>
);
