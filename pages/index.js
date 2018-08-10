import CardGrid from "./../components/CardGrid";

import "./../styles/index.scss";

const projects = [
  {
    title: "Caption",
    repo: "gielcobben/caption",
    downloads: "250,000",
    icon: "http://vernondegoede.com/static/open-source/caption.png",
    type: "github",
    downloadUrl: "https://getcaption.co",
    downloadUrl: "https://hyper.is/plugins/verminal",
  },
  {
    title: "verminal",
    repo: "verminal",
    downloads: "11,000",
    icon: "http://vernondegoede.com/static/open-source/verminal.png",
    type: "npm",
    countType: "monthly",
    githubRepo: "https://github.com/gielcobben/caption",
    githubRepo: "https://github.com/defringe/verminal",
  },
];

export default () => (
  <>
    <CardGrid projects={projects} />
  </>
);
