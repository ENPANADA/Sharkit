## CSS

```css
form {
  width: 100%;
  max-width: 800px;
  background: linear-gradient(45deg, #160024 25%, #001925 75%);
  padding: 15px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: #000 6px 6px 12px;
  color: white;
}

article:first-of-type figure > div:first-of-type {
  width: 50%;
}

figure {
  display: flex;
  gap: 15px;
}

figure > div {
  width: 100%;
}

div div {
  display: flex;
}

svg {
  height: 15px;
  width: 15px;
  color: #e0ccfa;
}

h2 {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  text-shadow: 3px 3px 4px #883aea;
}

span {
  display: flex;
  background: linear-gradient(15deg, #63e, #883aea 30%, #e0ccfa 90%);
  padding: 10px;
  border-radius: 8px 0 0 8px;
}

input,
select,
textarea {
  background-color: #1e202b;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #63e;
  width: 100%;
  color: #e0ccfa;
  box-sizing: border-box;
  resize: vertical;
}

input::file-selector-button {
  background-color: #310a65;
  color: inherit;
  border: 1px solid #63e;
  border-radius: 5px;
  padding: 2px 6px;
  cursor: pointer;
}

input::file-selector-button:hover {
  border-color: rgb(var(--accent-light));
}

input:focus,
select:focus,
textarea:focus {
  outline: 1px solid #883aea;
}

span + input,
span + select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

label {
  display: inline-flex;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
}

small {
  color: #a0a0a0;
}

button {
  display: inline-flex;
  justify-content: center;
  gap: 10px;
  background: #310a65;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  margin: 0 auto;
  width: 50%;
  font-weight: bold;
  border: 1px solid #883aea;
  cursor: pointer;
}

button:hover {
  border-color: #e0ccfa;
}

hr {
  border-color: #310a65;
}

@media (max-width: 640px) {
  button,
  form article:first-of-type figure > div:first-of-type {
    width: 100%;
  }

  figure {
    flex-direction: column;
  }
}

```
