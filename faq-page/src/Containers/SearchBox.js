import React, { Component } from "react";
import AutoCompleteList from "../Components/AutoCompleteList";
import MockData from "./TestData/faq.json";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      results: [],
      suggestions: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = async () => {
    this.setState({
      results: [...MockData],
    });
  };

  // return the user's input from search box
  handleChange = (event) => {
    const { value } = event.target;
    let suggestions = [];

    // Get matches from current text input.
    if (value.length > 0) {
      suggestions = this.state.results.filter((item) => {
        const regEx = new RegExp(`^${value}`, "gi");
        return item.question.match(regEx);
      });
    }
    this.setState({ suggestions, input: value });
  };

  render() {
    return (
      <div style={{ textAlign: "center", position: "relative" }}>
        <input
          onChange={this.handleChange}
          name="search"
          type="text"
          placeholder="Search for anwsers..."
          value={this.state.input}
        />
        {/* return a formatted list of results */}
        <AutoCompleteList matches={this.state.suggestions} />
      </div>
    );
  }
}

export default SearchBox;
