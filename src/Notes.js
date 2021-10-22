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
            - The counter works in O(nlogn) time, where n is the number of
            characters. The character frquency it found in O(n) time by
            iterating through the text and incrementing the value of the
            charcater key. The top five most frequent character is found by
            sorting the dicts keys by their values, and taking the top 5. this
            sorting is O(nlogn)
          </li>
          <li>
            {" "}
            - The top five most frequent character could be found in O(n) by
            iterating over the dict and keeping track of only the 5 more
            frequent characters and their frenqucy in a prioity Queue. I didn't
            implement this for sake of time.
          </li>
        </ul>
      </div>
    );
  }
}

export default Notes;
