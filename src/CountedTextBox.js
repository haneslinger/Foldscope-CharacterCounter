import React from "react";

class CountedTextBox extends React.Component {
  render() {
    return (
      <div class="textarea">
        {this.props.text.split("").map((character, i) => {
          if (this.props.highlightedCharacters.includes(character)) {
            return <mark key={i}>{character}</mark>;
          } else {
            return <span key={i}>{character}</span>;
          }
        })}
      </div>
    );
  }
}

export default CountedTextBox;
