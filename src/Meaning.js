import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.meaning.partOfSpeech);
  console.log(props.meaning.definition);

  return (
    <div className="Meaning">
      <h4 className="mb-1">{props.meaning.partOfSpeech}</h4>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div> <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
