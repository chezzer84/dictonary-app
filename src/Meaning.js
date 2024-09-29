import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.meaning.partOfSpeech);
  console.log(props.meaning.definition);

  return (
    <div className="Meaning">
      <h4 className="mb-1">{props.meaning.partOfSpeech}</h4>
      <p className="definition mb-0">{props.meaning.definition}</p>
      <p className="definition mb-0">{props.meaning.example}</p>
    </div>
  );
}
