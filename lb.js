// Selector
const createbtn = document.querySelector("#createbtn");
const textinput = document.querySelector("#textinput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneaa = document.querySelector("#doneaa");
// const temdata = ["apple", "orange", "mango", "banana", "lemon"];

// function
const createli = (text) => {
  const li = document.createElement("li");
  const dynimid = "flexCheckChecked" + Math.random();
  li.addEventListener("dblclick", edit);
  li.className =
    "list-group-item d-flex align-content-center justify-content-between px-3 py-1 animate__animated animate__fadeInDown";
  li.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="${dynimid}" onchange="done(event)">
    <label class="form-check-label" for="${dynimid}">
        ${text}
    </label>
</div>
<div class="btn-group "><button class="btn btn-outline-danger btn-sm" onclick="edit(event)"><i class="bi bi-pencil pe-none"></i></button>
<button class="btn btn-danger btn-sm " onclick="del(event)"> <i class=" bi bi-trash pe-none"></i> </button></div>
`;
  return li;
};

let total_count = () => {
  const ctotal = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = lists.children.length;
  doneaa.innerText = ctotal;
};

const addlist = () => {
  if (textinput.value.trim()) {
    lists.append(createli(textinput.value));
    textinput.value = null;
    total_count();
  } else {
    alert("Input Text is Blank");
  }
};

const del = (event) => {
  if (confirm("Are you sure ? Delete")) {
    event.target.closest("li").remove();
    console.log(event.target);
    total_count();
  }
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  total_count();
};

const edit = (event) => {
  //   console.log(event);
  const old = event.target.closest("li").querySelector(".form-check-label");
  const detect = prompt("New Text", old.innerText);
  if (detect && detect.trim()) {
    old.innerText = detect;
    console.log(detect);
  } else {
    alert("!ERROR : Please Retype Value");
  }
};

createbtn.addEventListener("click", addlist);

textinput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addlist();
  }
});

temdata.forEach((d) => lists.append(createli(d)));

window.addEventListener("load", total_count);
