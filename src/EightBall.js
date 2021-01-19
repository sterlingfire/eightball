import { useState } from "react";
import "./EightBall.css";

/** EightBall component
 * 
 * Props:
 * - answers: [{msg, color}, ...]
 * 
 * State:
 * - color: current color of the eightball
 * - msg: current message of the eightball
 * - records: object holding the scores for the colors
 *    ex: {red: 10, green: 2, goldenrod: 3}
 * 
 * App -> EightBall
 * */ 

function EightBall({answers}) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Ask a question.");
  const [records, setRecords] = useState({green: 0, red: 0, goldenrod: 0});
  let EightBallStyle = {backgroundColor:color};

  return (
    <div>
      <div onClick={getAnswer} className="EightBall" style={EightBallStyle}>
        <h2 className="EightBall-Title" >{msg}</h2>
      </div>
      <button onClick={reset} className="EightBall-Reset">Reset the eightball!</button>
      <div>
        <p>Score for green: {records.green}</p>
        <p>Score for red: {records.red}</p>
        <p>Score for goldenrod: {records.goldenrod}</p>
      </div>
    </div>
  );
  
  function getAnswer() {
    let ansIndex = Math.floor(Math.random()*answers.length);
    let {msg, color} = answers[ansIndex];
    records[color] += 1;
    setMsg(msg);
    setColor(color);
    setRecords(records);
  }

  function reset() {
    setMsg("Ask a question");
    setColor("black");
    setRecords({green: 0, red: 0, goldenrod: 0});
  }
}

EightBall.defaultProps = {answers:[
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
]};

export default EightBall;
