console.log("hello god? are you there?");

fetch("http://localhost:8088/colors")
  .then(response => response.json())
  .then(legoColors => {
    populateColorMenu(legoColors);
  })

const legoCreator = document.querySelector("#lego__creator");
const colorMenu = document.querySelector("#select__lego__colors");
const legoShape = document.querySelector("#lego__shape");
const legoCreation = document.querySelector("#lego__creation");
const saveBtn = document.querySelector("#save__lego");
const form = document.querySelector("#form");


const populateColorMenu = (colorArray) => {
  colorArray.forEach(color => {
    if (color.LegoName) {
      let child = document.createElement("OPTION");
      child.innerHTML = `${color.LegoName}`;
      child.value = `${color.LegoName}`;
      colorMenu.appendChild(child);
    }
  });
}

saveBtn.addEventListener("click", event => {
  let creator = legoCreator.value;
  let color = colorMenu.value;
  let shape = legoShape.value;
  let creation = legoCreation.value;

  const legoToSave = {
    "creator": creator,
    "color": color,
    "shape": shape,
    "creation": creation
  }

  legoCreator.value = "";
  colorMenu.value = "";
  legoShape.value = "";
  legoCreation.value = "";

  fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
  })
  console.log(legoToSave);
})