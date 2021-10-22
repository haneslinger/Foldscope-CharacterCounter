import React from "react";

class InputTextBox extends React.Component {
  render() {
    return (
      <textarea
        class="textarea"
        type="text"
        onChange={this.props.onChange}
        value={this.props.text}
      />
    );
  }
}

export default InputTextBox;
