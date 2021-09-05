import React, { Component } from 'react';

class Comp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      comment:[]
    }
    this.myRef=React.createRef();
  }
  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({ count: currentCount });
  };
  addComment=()=> {
let comment=this.myRef.current.value;
let comments=this.state.comment;
comments.push(comment)
this.setState({comments: comments})
this.myRef.current.value='';

  }

  render() {
    return (
      <>
        <h1>State</h1>

        <button onClick={this.handler}>Press me to change state</button>

        <div>
          {this.state.count !== 0 ? (
            this.state.count % 2 === 0 ? (
              "yes, it is even"
            ) : (
              "of course, it is odd"
            )
          ) : (
            <p>state is 0 </p>
          )}
        </div>
        <div> {this.state.count}</div>

        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
        <button onClick={this.addComment}>Add text</button>
        </div>

        <div>
            <ul> 
{this.state.comment.map((item,index)=> <li key={index.toString()}>{item}</li>)}

            </ul>
        </div>

      </>
    );
  }
}

export default Comp1;
