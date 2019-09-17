import React, { Component } from "react";

class EightBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      msg: "Think of a Question."
    }
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    answers: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ]
  };

  getRandom() {
    return Math.floor(Math.random() * this.props.answers.length);
  }

  handleClick(evt) {
    let randomIndex = this.props.answers[this.getRandom()]
    this.setState({
      color: randomIndex.color,
      msg: randomIndex.msg
    });
  }
  render() {
    return (
      <button onClick={this.handleClick} style={{
        backgroundColor: this.state.color,
        color: "white",
        borderRadius: "50%",
        width: "200px",
        height: "200px"
      }}>
        <span>{this.state.msg}</span>
      </button>
    )
  }
}

export default EightBall;