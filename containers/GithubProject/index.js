import Card from "./../../components/Card";
import getGithubDownloadCount from "./../../utils/github/getDownloadCount";

class GithubProject extends React.Component {
  state = {
    downloads: 0,
  };

  async componentDidMount() {
    const downloads = await getGithubDownloadCount(this.props.repo);
    this.setState({
      downloads,
    });
  }

  render() {
    return <Card {...this.props} downloads={this.state.downloads} />;
  }
}

export default GithubProject;
