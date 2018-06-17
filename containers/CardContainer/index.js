import Card from "./../../components/Card";

import getDownloadCount from "./../../utils/github/getDownloadCount";

class CardContainer extends React.Component {
  state = {
    downloads: 0,
  };

  async componentDidMount() {
    const downloads = await getDownloadCount(this.props.repo);
    this.setState({
      downloads,
    });
  }

  render() {
    return <Card {...this.props} downloads={this.state.downloads} />;
  }
}

export default CardContainer;
