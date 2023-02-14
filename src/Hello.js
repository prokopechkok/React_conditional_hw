import React from "react";

export default function Hello(props) {
  if (props.lang === "fr") {
    return (
      <div className="Hello">
        <h2>Bonjour</h2>
      </div>
    );
  } else if (props.lang === "es") {
    return (
      <div className="Hello">
        <h2>Hola</h2>
      </div>
    );
  } else {
    return (
      <div className="Hello">
        <h2>Hello</h2>
      </div>
    );
  }
}
