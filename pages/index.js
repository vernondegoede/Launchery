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
    githubRepo: "https://github.com/gielcobben/caption",
  },
  {
    title: "Caption Core",
    repo: "caption-core",
    downloads: "0",
    icon: "http://vernondegoede.com/static/open-source/caption-core.png",
    type: "npm",
    githubRepo: "https://github.com/gielcobben/caption-core",
    downloadUrl: "https://getcaption.co",
  },
  {
    title: "verminal",
    repo: "verminal",
    downloads: "11,000",
    icon: "http://vernondegoede.com/static/open-source/verminal.png",
    type: "npm",
    countType: "monthly",
    githubRepo: "https://github.com/defringe/verminal",
    downloadUrl: "https://hyper.is/plugins/verminal",
  },
  {
    title: "mollie-api-node",
    repo: "mollie-api-node",
    downloads: "0",
    icon:
      "https://images.ctfassets.net/k4kk06v59kf0/3Y71BBif6UcOOkeKguOagk/4bb3f507e602719a476e40d4b2f17583/icon-node.svg",
    type: "npm",
    countType: "monthly",
    githubRepo: "https://github.com/mollie/mollie-api-node",
    downloadUrl: "https://www.npmjs.com/package/mollie-api-node",
  },
];

export default () => (
  <>
    <CardGrid projects={projects} />
  </>
);
