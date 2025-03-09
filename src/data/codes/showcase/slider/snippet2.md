## CSS

```css
.container {
  color: white;
  margin: 0;
  width: 600px;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #310a65;
  border-radius: 10px;
  background: linear-gradient(45deg, #160024 25%, #001925 75%);
  box-shadow: #000 6px 6px 12px;

  &:has(input#bg1:checked) {
    --index: 0;
  }
  &:has(input#bg2:checked) {
    --index: 1;
  }
  &:has(input#bg3:checked) {
    --index: 2;
  }
  &:has(input#bg4:checked) {
    --index: 3;
  }
  &:has(input#bg5:checked) {
    --index: 4;
  }

  &:has(input#bg1:checked) .nav label:first-child,
  &:has(input#bg2:checked) .nav label:nth-child(2),
  &:has(input#bg3:checked) .nav label:nth-child(3),
  &:has(input#bg4:checked) .nav label:nth-child(4),
  &:has(input#bg5:checked) .nav label:nth-child(5) {
    background-color: #310a65;
    border-color: #e0ccfa;
  }
}

.slider {
  height: 250px;
  position: relative;
  border: 2px solid #63e;
  overflow: clip;
}

.main {
  height: 100%;
  display: flex;
  translate: calc(-100% * var(--index, 0));
  transition: translate 0.4s ease-in-out;

  svg {
    font-style: italic;
    font-family: Impact, Arial, sans-serif;
    fill: #63e;
    stroke: #e0ccfa;
    stroke-width: 0.5;
  }
}

.item {
  position: relative;
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
  background-color: #06040a;
}

.controls {
  width: 100%;
  position: absolute;
  bottom: 6%;
  display: flex;
  justify-content: center;

  div {
    background-color: #000;
    padding: 7px 12px;
    border-radius: 10px;
    display: inline-flex;
    gap: 4px;
  }

  input {
    appearance: none;
    background-color: #310a65;
    margin: 0;
    width: 12px;
    height: 12px;
    border: 1px solid #e0ccfaa0;
    border-radius: 10px;
    transition: width 0.2s ease, background-color 0.2s ease-out,
      border-color 0.2s ease-out;

    &:hover {
      cursor: pointer;
      border-color: #e0ccfa;
    }

    &:checked {
      cursor: default;
      width: 24px;
      border-color: #e0ccfa;
      background: #63e;
    }
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 8px;

  label {
    margin: 0;
    padding: 5px 10px;
    border-radius: 8px;
    border: solid 1px #63e;
    font-size: 15px;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: border 0.2s ease-out, background-color 0.2s ease;

    &:hover {
      border-color: #e0ccfaa0;
    }
  }
}


```
