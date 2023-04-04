const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const savedata = document.getElementById("savedata");

let clearresult = (_) => (result.innerText = null);

calculate.onclick = (_) => {
  const total = width.valueAsNumber * height.valueAsNumber;
  console.log(total);
  if ((width.valueAsNumber == "") & (height.valueAsNumber == "")) {
    window.alert("width & height blank");
  }
  result.innerText = `${width.valueAsNumber}ft x ${height.valueAsNumber}ft = ${total}sqft`;
  width.value = height.value = null;
  return total;
};

clear.onclick = clearresult;

store.onclick = (_) => {
  savedata.innerHTML += `<li>${result.innerText}</li>`;
  clearresult();
  return savedata;
};
