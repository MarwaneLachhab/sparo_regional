// import React from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img src={props.img} alt="" width={"200px"} height={"100px"} />
      <h3>{props.title}</h3>
      <span>{props.prix}</span>
      <br />
      <p>
        <b>{props.description}</b>
      </p>
      <button>
        <Link to={`/${props.id}`}>Afficher les details</Link>
      </button>
    </div>
  );
}

export default Cards;
