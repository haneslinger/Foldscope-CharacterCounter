import React from "react";

class ResultsDisplay extends React.Component {
  render() {
    if (this.props.showInputView) {
      return <div> Enter your text to the left, then hit "count"</div>;
    } else {
      return (
        <div class="grid grid-cols-3 gap-1">
          {Object.keys(this.props.characterCount).map((character) => {
            return (
              <div class="flex" key={character}>
                <button
                  class={
                    this.props.highlightedCharacters.includes(character)
                      ? "result bg-yellow-300 rounded-l"
                      : "result bg-gray-400 rounded-l"
                  }
                >
                  {character}
                </button>
                <button
                  class={
                    this.props.highlightedCharacters.includes(character)
                      ? "result bg-yellow-300 rounded-r"
                      : "result bg-gray-300 rounded-r"
                  }
                >
                  {this.props.characterCount[character]}
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default ResultsDisplay;
