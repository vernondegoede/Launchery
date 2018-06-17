import Card from "./../../components/Card";
import getNPMDownloadCount from "./../../utils/npm/getDownloadCount"; 

class GithubProject extends React.Component {
  state = {
    downloads: 0,
  };

  async componentDidMount() {
    const downloads = await getNPMDownloadCount(this.props.repo);
    this.setState({
      downloads,
    });
  }

  render() {
    return <Card {...this.props} downloads={this.state.downloads} />;
  }
}

export default GithubProject;
