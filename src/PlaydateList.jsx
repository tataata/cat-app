import Badge from 'react-bootstrap/Badge'
import './PlaydateList.css'

function PlaydateList(props) {
  return (
 
    <div className="playdate-list">
      <p>You book playdate with:</p>
      {/* create a li for each item (aka cat) in cart array? */}
      <ul>
        {props.playdate.map((cat, index) => {
          return (
            <li key={index}>
              {cat.name}{" "}
               {/* Conditional rendering: If the cat has special flag, display a text "Special mention" */}
               { cat.special ? (<Badge pill bg="warning">Special mention</Badge>): <></> }

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  props.cancelPlaydate(index);
                }}
              >
                Cancel
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlaydateList;
