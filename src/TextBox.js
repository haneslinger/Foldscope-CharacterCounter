import React from "react";

class TextBox extends React.Component {
  render() {
    if (this.props.showInputView) {
      return (
        <textarea
          class="textarea"
          type="text"
          onChange={this.props.onChange}
          value={this.props.text}
        />
      );
    } else {
      return (
        <div class="textarea">
          {this.props.text.split("").map((character, i) => {
            if (character === "\n") {
              return <br />;
            } else if (this.props.highlightedCharacters.includes(character)) {
              return <mark key={i}>{character}</mark>;
            } else {
              return <span key={i}>{character}</span>;
            }
          })}
        </div>
      );
    }
  }
}

export default TextBox;
