import React from "react";

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h2>Notes</h2>

        <ul class="list-inside bg-gray-200 ...">
          <li> - This app is made with create-react-app. </li>
          <li>
            {" "}
            - The counter is case sensitive and counts non-alphanumberic
            characters. This would be trival to change.
          </li>
          <li>
            {" "}
            - In the case of a tie, the 5 most frequent go to the characters
            that appear first.
          </li>
          <li>
            {" "}
            - The character frquency it found in O(n) time by creating a dict,
            iterating through the text, and incrementing the value of the
            charcater key.
          </li>
          <li>
            {" "}
            - The top five most frequent character is found in O(n) by iterating
            over the character frquency and keeping track of only the 5 more
            frequent characters and their frenqucy in a prioity Queue.
          </li>
        </ul>
      </div>
    );
  }
}

export default Notes;
