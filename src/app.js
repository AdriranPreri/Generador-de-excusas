document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("excuseBtn").addEventListener("click", function() {
    generateExcuse();
  });
});

function generateExcuse() {
  //array with the words
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  //creating the excuse sentence
  let excuse = `${who[rdm1]} ${action[rdm2]} ${what[rdm3]} ${when[rdm4]}`;

  document.querySelector("#theexcuse").innerHTML = excuse;
}
