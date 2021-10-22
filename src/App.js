import React from "react";
import "./App.css";
import Notes from "./Notes";
import TextBox from "./TextBox";
import ResultsDisplay from "./ResultsDisplay";
import { countCharacters, getMostFrequentCharacters } from "./BusinessLogic";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputView: true,
      text: "",
      characterCount: {},
      mostFrequentCharacters: [],
    };
  }

  changeText = (e) => {
    const newText = e.target.value;
    this.setState({ text: newText });
  };

  changeView = () => {
    if (this.state.showInputView) {
      const characterCount = countCharacters(this.state.text);

      this.setState({
        characterCount: characterCount,
        mostFrequentCharacters: getMostFrequentCharacters(characterCount),
      });
    }

    this.setState({
      showInputView: !this.state.showInputView,
    });
  };

  render() {
    return (
      <div class="container">
        <header class="header">Character Counter - Hannah Eslinger</header>
        <div class="page">
          <button class="btn" onClick={this.changeView}>
            {this.state.showInputView ? "count" : "reset"}
          </button>
          <button
            class="btn"
            onClick={() => this.setState({ text: "", showInputView: true })}
          >
            clear
          </button>
          <div class="workarea">
            <TextBox
              showInputView={this.state.showInputView}
              text={this.state.text}
              onChange={this.changeText}
              highlightedCharacters={this.state.mostFrequentCharacters}
            />
            <div class="results">
              <ResultsDisplay
                showInputView={this.state.showInputView}
                characterCount={this.state.characterCount}
                highlightedCharacters={this.state.mostFrequentCharacters}
              />
            </div>
          </div>
          <div class="info">
            <Notes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
