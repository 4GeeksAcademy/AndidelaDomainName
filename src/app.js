/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "dog", "merchant", "driver"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
}; */
// refactoring abajo
window.onload = function() {
  const pronoun = ["the", "our", "his"];
  const adj = ["great", "big", "amazing"];
  const noun = ["jogger", "racoon", "dog", "merchant", "driver"];

  const domainNames = pronoun.flatMap(p =>
    adj.flatMap(a => noun.map(n => `${p}${a}${n}.com`))
  );

  domainNames.forEach(name => console.log(name));
};
