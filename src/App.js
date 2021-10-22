import React from "react";
import "./App.css";
import Notes from "./Notes";
import Prompt from "./Prompt";
import CountedTextBox from "./CountedTextBox";
import InputTextBox from "./InputTextBox";
import CountDisplay from "./CountDisplay";

function countCharacters(text) {
  var count = {};
  text.split("").forEach((val) => (count[val] = (count[val] || 0) + 1));
  return count;
}

function getMostFrequentCharacters(characterCount) {
  const characters = Object.keys(characterCount);

  // take the first five and sort them by frequ
  const fiveMostFrequ = characters
    .slice(0, 5)
    .sort((a, b) => characterCount[a] - characterCount[b]);

  // for each char, if its more frequent than least frequent in fiveMostFrequ,
  // replace least frequent fiveMostFrequ and resort.
  // we could do this without sorting but it's all constant time anyway.
  characters.slice(5).forEach((character) => {
    if (characterCount[character] > characterCount[fiveMostFrequ[0]]) {
      fiveMostFrequ[0] = character;
      fiveMostFrequ.sort((a, b) => characterCount[a] - characterCount[b]);
    }
  });

  return fiveMostFrequ;
}

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
            {this.state.showInputView ? (
              <InputTextBox text={this.state.text} onChange={this.changeText} />
            ) : (
              <CountedTextBox
                text={this.state.text}
                highlightedCharacters={this.state.mostFrequentCharacters}
              />
            )}
            <div class="results">
              {this.state.showInputView ? (
                <Prompt />
              ) : (
                <CountDisplay
                  characterCount={this.state.characterCount}
                  highlightedCharacters={this.state.mostFrequentCharacters}
                />
              )}
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
