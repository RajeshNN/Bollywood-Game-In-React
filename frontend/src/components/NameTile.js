import React from "react"

export default function NameTile(props) {

  function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  function helper(word) {
    let res = "";
    for(let i = 0; i < word.length; i++) {
      if(props.guesses.has(word[i])) {
        res += word[i];
      }
      else if(!isAlphaNumeric(word[i])) {
        res += word[i];
        let obj = props.guesses;
        obj.add(word[i]);
        props.setGuesses(new Set(obj));
      }
      else{
        res += "#";
      }
    }
    return res;
  }

  return (
    <span display="flex">
      {props.title.split(" ").map((word, iw) => (
        <b>{helper(word)}&nbsp;&nbsp;</b>
      ))}
    </span>
  )
}
