// // 4 pillars of Document Of Modal(DOM)

// // 1. Selection of an Element
// // 2. Changing HTML
// // 3. Changing CSS
// // 4. Adding Event Listeners

// // Selection of element
// const a = document.querySelector("h1");
// console.log(a);

// // Changing HTML

// a.innerHTML = "Changed html using JavaScript";

// // Changing CSS

// // for changing CSS we always have to use .style after selected HTML then any CSS property but there is a problem we have to write style in camelCase so background-color = backgroundColor or  text-align = textAlign

// a.style.color = "yellow";
// a.style.backgroundColor = "black";
// a.style.textAlign = "center";

// // Adding Event Listeners

// // Event Listener: When a user interacts with an HTML element, JavaScript can trigger an event.

// a.addEventListener("click", () => {
//   a.innerHTML =
//     "You clicked the H1 the text changes using addEventListener() and you didn't notice the cursor is now pointer and color is red";
//   a.style.cursor = "pointer";
//   a.style.color = "red";
// });

// making a glob

// const glob = document.querySelector("#bulb");
// const button = document.querySelector("button");
// let flag = true;
// button.addEventListener("click", () => {
//   if (flag) {
//     glob.style.backgroundColor = "yellow";
//     button.textContent = "off";
//   } else {
//     glob.style.backgroundColor = "white";
//     button.textContent = "on";
//   }
//   flag = !flag;
// });

// Selecting multiple queries at a time

// const h1s = document.querySelectorAll("h1");
// h1s.forEach((h1, i) => {
//   h1.addEventListener("click", () => {
//     const h2 = document.querySelector("h2");
//     h2.innerHTML = `You clicked the H1 ${
//       i + 1
//     } the text changes using forEach()`;
//     h2.style.cursor = "pointer";
//     h2.style.color = "red";
//   });
// });

// getElementsById

// const box = document.getElementById("box");

// box.addEventListener("click", () => {
//   box.style.backgroundColor = "red";
// });

// getElementsById

// const box = document.getElementById("box");
// console.log(box);
// box.addEventListener("click", () => {
//   box.style.backgroundColor = "red";
// });

// getElementsByClassName;
// it gives us an array so we have to loop through the elements or use a specific index like I used in the below example
// const box = document.getElementsByClassName("box")[0];
// console.log(box);
// box.addEventListener("click", () => {
//   box.style.backgroundColor = "red";
// });

// changing textContent

const h = document.querySelector("h1");

h.addEventListener("click", () => {
  h.textContent = "Changed text using textContent";
});
