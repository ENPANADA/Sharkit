---
lang: js
---

## Javascript

```js
const element = document.querySelector("aside");
const regex = /^[a-zA-Z0-9]$/; //Customize the allowed input values

element.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.altKey) return;
    if (
        regex.test(e.key) ||
        e.code === "Backspace" ||
        e.code === "Delete" ||
        e.code === "ArrowLeft" ||
        e.code === "ArrowRight"
    ) {
        if (!(e.code === "ArrowLeft" || e.code === "ArrowRight")) {
            e.target.value =
                e.code === "Backspace" || e.code === "Delete" ? "" : e.key;
        }
        e.code === "Backspace" || e.code === "ArrowLeft"
            ? e.target.previousElementSibling?.focus()
            : e.target.nextElementSibling?.focus();
    }
});

element.addEventListener("paste", (e) => {
    const parent = e.target.parentElement;
    const code = e.clipboardData
        ?.getData("text")
        .split("", parent.childElementCount);
    let child = parent.firstElementChild;
    code.forEach((char) => {
        child.value = regex.test(char) ? char : "";
        child = child.nextElementSibling;
        child?.focus();
    });
});

```
