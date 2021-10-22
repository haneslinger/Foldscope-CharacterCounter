import React from "react";

class CountDisplay extends React.Component {
  render() {
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

export default CountDisplay;
