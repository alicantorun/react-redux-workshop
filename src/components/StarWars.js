import React, { Component } from "react";
import { connect } from "react-redux"; //connect is a higher order component
import { getData } from "../action/getData";
import CharacterCard from "../components/CharacterCard";

class StarWars extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          we count all star wars characters and they are: {this.props.count}
        </h1>
        <CharacterCard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.dataReducer.data.count
});

export default connect(
  mapStateToProps,
  { getData }
)(StarWars);
