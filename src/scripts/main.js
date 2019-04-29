console.log("hello god? are you there?");

fetch("http://localhost:8088/legos")
  .then(response => response.json())
  .then(legoObj => {
    console.log(legoObj.color);
  })

