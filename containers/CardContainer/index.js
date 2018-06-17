import NpmProject from "./../NpmProject";
import GithubProject from "./../GithubProject";

class CardContainer extends React.Component {
  render() {
    const { type, ...props } = this.props;

    switch (type) {
      case "npm":
        return <NpmProject {...props} />;
      case "github":
        return <GithubProject {...props} />;
    }
  }
}

export default CardContainer;
