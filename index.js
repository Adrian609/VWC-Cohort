function drag_handler(ev) {
  console.log("Drag");
}

function dragstart_handler(ev) {
  console.log("dragStart");
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragEnter(ev) {
  console.log(dragEnter);
  ev.currentTarget.style.background = "#CFDFE7";
  ev.currentTarget.innerHTML = "Drop to Add Coversion Factor to Calculation";
  ev.currentTarget.innerHTML.style = "font-size=2rem";
}

function dragExit(ev) {
  console.log(dragExit);
  ev.currentTarget.style.background = "#b4b3ae";
  ev.currentTarget.innerHTML = "";
}

function drop_handler(ev) {
  console.log("Drop");
  ev.currentTarget.innerHTML = "";
  ev.currentTarget.style.background = "#b4b3ae";
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.append(document.getElementById(data));
}

function addTile() {
  var i = 0;
  var original = document.getElementById("customCFContainer");
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "customCF" + ++i; // there can only be one element with an ID
  original.parentNode.appendChild(clone);
  document.getElementById("target").appendChild(clone);
  console.log("customCFContainer Cloned to equation container");
  return clone;
}

function addTileToNotebook() {
  var i = 0;
  var original = document.getElementById("customCFContainer");
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "customCF" + ++i; // there can only be one element with an ID
  original.parentNode.appendChild(clone);
  document.getElementById("notebookCF").appendChild(clone);
  console.log("notebookCFContainer Cloned to equation container");
  return clone;
}
