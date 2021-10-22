import React from "react";

class CountedTextBox extends React.Component {
  render() {
    return (
      <div class="textarea">
        {this.props.text.split("").map((character) => {
          if (this.props.highlightedCharacters.includes(character)) {
            return <mark key={character}>{character}</mark>;
          } else {
            return <span key={character}>{character}</span>;
          }
        })}
      </div>
    );
  }
}

export default CountedTextBox;
