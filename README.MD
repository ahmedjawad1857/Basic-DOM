# Basic DOM Manipulation in JavaScript

This project demonstrates the four pillars of Document Object Model (DOM) manipulation using JavaScript. The key concepts covered are:

1. Selection of an Element
2. Changing HTML
3. Changing CSS
4. Adding Event Listeners

## Key Concepts and Examples

### 1. Selection of an Element

To select an HTML element, use methods such as `document.querySelector`:

```javascript
const a = document.querySelector("h1");
console.log(a);
```
````

### 2. Changing HTML

You can change the inner HTML of an element using the `innerHTML` property:

```javascript
a.innerHTML = "Changed HTML using JavaScript";
```

### 3. Changing CSS

To change the CSS of an element, use the `style` property followed by the CSS property in camelCase:

```javascript
a.style.color = "yellow";
a.style.backgroundColor = "black";
a.style.textAlign = "center";
```

### 4. Adding Event Listeners

JavaScript can trigger events when a user interacts with an HTML element. Use `addEventListener` to add event listeners:

```javascript
a.addEventListener("click", () => {
  a.innerHTML =
    "You clicked the H1. The text changes using addEventListener() and you didn't notice the cursor is now a pointer and the color is red.";
  a.style.cursor = "pointer";
  a.style.color = "red";
});
```

### Example: Creating a Light Bulb Toggle

This example shows how to create a simple toggle for a light bulb effect:

```javascript
const glob = document.querySelector("#bulb");
const button = document.querySelector("button");
let flag = true;

button.addEventListener("click", () => {
  if (flag) {
    glob.style.backgroundColor = "yellow";
    button.textContent = "Off";
  } else {
    glob.style.backgroundColor = "white";
    button.textContent = "On";
  }
  flag = !flag;
});
```

### Selecting Multiple Elements

To select multiple elements, use `document.querySelectorAll` and iterate over the NodeList:

```javascript
const h1s = document.querySelectorAll("h1");
h1s.forEach((h1, i) => {
  h1.addEventListener("click", () => {
    const h2 = document.querySelector("h2");
    h2.innerHTML = `You clicked H1 number ${
      i + 1
    }. The text changes using forEach()`;
    h2.style.cursor = "pointer";
    h2.style.color = "red";
  });
});
```

### Other Methods for Selecting Elements

#### `getElementById`

```javascript
const box = document.getElementById("box");
box.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
```

#### `getElementsByClassName`

This method returns an HTMLCollection, so you need to use an index or loop through the collection:

```javascript
const box = document.getElementsByClassName("box")[0];
box.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
```

### Changing `textContent`

You can change the text content of an element using the `textContent` property:

```javascript
const h = document.querySelector("h1");
h.addEventListener("click", () => {
  h.textContent = "Changed text using textContent";
});
```

## Conclusion

This project covers the basic principles of DOM manipulation using JavaScript. By understanding these concepts, you can create dynamic and interactive web pages.
