import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";
import Modal from "./modal"

class Details extends Component {
  // construtor is also called as component didmount
  constructor() {
    super();
    this.state = { loading: true, showModal:false};
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  toggleModel =()=>this.setState({showModal:!this.state.showModal})
  adopt= ()=>(window.location="http://bit.ly/pet-adopt")
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    const { animal, breed, city, state, description, name, images,showModal } =
      this.state;
    return (
      <div className="details">
        <div>
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${city},${state}`}</h2>
          <p>{description}</p>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button 
              onClick={this.toggleModel}
              style={{ backgroundColor: theme }}>Adopt{name}</button>
            )}
          </ThemeContext.Consumer>
          {showModal ? (
                  <Modal>
                      <div>
                          <h1>adopt me ?</h1>
                          <div className="buttons">
                              <button onClick={this.adopt}> yes</button>
                              <button onClick={this.toggleModel}>No</button>
                          </div>
                      </div>
                  </Modal>
              ):null}
        </div>
      </div>
    );
  }
}
const DetailWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundry() {
  return (
    <ErrorBoundry>
      <DetailWithRouter />
    </ErrorBoundry>
  );
}
