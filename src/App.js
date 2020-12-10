import React, { Component } from "react";
import DateInput from "./Components/DateInput";
import "./App.css";
import Photo from "./Components/Photo.js";
import styled from "styled-components";

class App extends Component {
  state = {
    date: "",
    photo: "",
  };

  changeDate = (e) => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=GNTFSQRo7Wtzmc51JvivCc00L3Ist2MWtfTcLVwG`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ photo: json }));
  }

  getPhoto = (date) => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=GNTFSQRo7Wtzmc51JvivCc00L3Ist2MWtfTcLVwG`
    )
      .then((response) => response.json())
      .then((photoData) => this.setState({ photo: photoData }));
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "darkgray",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "3rem",
            padding: "0.25rem",
          }}
        >
          NASA's Picture of the day
        </h1>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
