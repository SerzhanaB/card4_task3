import React from 'react';
import {useState} from 'react';

function Comp2() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);
  let myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  let addComment = () => {
    let commentValue = myRef.current.value;

    let comments = [...comment, commentValue];
    setComment(comments);
    myRef.current.value = '';
  };

  return (
    <>
      <h1>State</h1>

      <button onClick={handler}>Press me to change state</button>

      <div>
        {count !== 0 ? (
          count % 2 === 0 ? (
            "yes, it is even"
          ) : (
            "of course, it is odd"
          )
        ) : (
          <p>state is 0 </p>
        )}
      </div>
      <div> {count}</div>

      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Add text</button>
      </div>

      <div>
        <ul>
          {comment.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comp2;
