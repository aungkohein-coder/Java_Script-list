const fonts = ["fantasy", "fangsong", "Helvetica", "Geneva", "Verdana"];

// selector
const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontsize = document.querySelector("#fontsize");
const fontfamily = document.querySelector("#fontfamily");

// loop

fonts.forEach((font) => {
  //   console.log(font);
  console.log(new Option(font, font));
  fontfamily.append(new Option(font, font));
});

// run

text.addEventListener("keyup", (event) => {
  //   console.log(text.value);
  //   console.log(event.target.value);
  //   console.log(event);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  //   console.log(color);
  output.style.color = event.target.value;
});

fontsize.addEventListener("change", (e) => {
  console.log(fontsize.value);
  output.style.fontSize = e.target.value + "px";
});

fontfamily.addEventListener("change", (e) => {
  output.style.fontFamily = e.target.value;
});
