import { useState } from "react";

export default function Bio(props) {

    const [postComments, setPostComments] = useState([])
    const [commentsBox, setCommentsBox] = useState("")

  return (
    <div className="panel-body bio-graph-info">
    <h1>Bio</h1>
    <div className="row">
    <div className="bio-row">
        <p>
        <span>First Name </span>: {props.FName}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Last Name </span>: {props.LName}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Country </span>: {props.country}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Birthday</span>: {props.Birthday}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Occupation </span>: {props.Occupation}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Email </span>: {props.Email}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Mobile </span>: {props.mobile}
        </p>
    </div>
    <div className="bio-row">
        <p>
        <span>Phone </span>: {props.phone}
        </p>
    </div>
    </div>
    </div>

);
}
