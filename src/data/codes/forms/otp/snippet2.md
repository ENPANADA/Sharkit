## CSS

```css
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background: linear-gradient(45deg, #160024 25%, #001925 75%);
  border-radius: 0.9rem;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  box-shadow: #000 6px 6px 12px;
}

h2,
h3 {
  margin: 0;
  align-self: center;
  font-family: monospace;
  transition: color 0.3s;
}

h2 {
  font-size: 25px;
  text-shadow: 3px 3px 4px #883aea;
}

h3 {
  font-size: 20px;
  max-width: 100%;
  background: linear-gradient(15deg, #63e, #883aea 30%, #e0ccfa 90%);
  background-clip: text;
  color: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
}

p {
  margin: 0;
  font-size: 1rem;
}

span {
  margin: 0;
  font-size: 0.92rem;
  align-self: center;
}

strong, h2:hover, h3:hover {
  color: #e0ccfa;
}

button {
  padding: 0.5rem 0.6rem;
  border-radius: 0.5rem;
  border: solid 0.1rem #883aea;
  font-size: 0.9rem;
  color: inherit;
  background-color: #310a65;
  align-self: end;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover, &:focus {
    border-color: #e0ccfa;
    color: #e0ccfa;
    outline: none;
  }
}

button[type="button"] {
  background-color: transparent;
  text-decoration: underline;
  border: none;
  color: #e0ccfa;
  padding: 0;
  cursor: pointer;
  border-radius: 10%;
  padding: 0.2rem 0.3rem;
  transition: color 0.2s ease;

  &:hover {
    color: #883aea;
  }

  &:focus-visible {
    outline: 1px solid #883aea;
  }
}

aside {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;

  input {
    width: 1.1rem;
    padding: 0.4rem 0.7rem;
    border-radius: 0.2rem 0.2rem 0 0;
    border: none;
    border-bottom: solid 0.2rem #883aea;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    caret-color: #883aea;
    transition: transform 0.2s, border-bottom-color 0.2s, background-color 0.5s;
    cursor: default;

    &:focus {
      outline: none;
      border-bottom-color: #e0ccfa;
      animation: border-bottom-pulse 1s infinite 1.5s;
    }

    &::placeholder {
      color: #e0ccfa;
      opacity: 0.8;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &:hover {
      transform: translateY(-3px);
      background-color: #310a65;
    }
  }
}

@keyframes border-bottom-pulse {
  50% {
    border-bottom-color: #883aea;
  }
}

```
