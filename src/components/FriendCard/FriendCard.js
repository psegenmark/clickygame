import React from "react";
import "./FriendCard.css";


const FriendCard = props => {
  
  return (
  <div className="card" key={props.id}>
    <div className="img-container" key={props.id}>
      <img key={props.id} alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)}/>
    </div>
  </div>
)};

export default FriendCard;
