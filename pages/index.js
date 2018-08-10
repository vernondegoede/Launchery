import CardGrid from "./../components/CardGrid";

import "./../styles/index.scss";

const projects = [
  {
    title: "Caption",
    repo: "gielcobben/caption",
    downloads: "250,000",
    icon: "http://vernondegoede.com/static/open-source/caption.png",
    type: "github",
    githubRepo: "https://github.com/defringe/verminal",
    downloadUrl: "https://getcaption.co",
  },
  {
    title: "verminal",
    repo: "verminal",
    downloads: "11,000",
    icon: "http://vernondegoede.com/static/open-source/verminal.png",
    type: "npm",
    countType: "monthly",
    githubRepo: "https://github.com/gielcobben/caption",
    downloadUrl: "https://hyper.is/plugins/verminal",
  },
];

export default () => (
  <>
    <CardGrid projects={projects} />
  </>
);
