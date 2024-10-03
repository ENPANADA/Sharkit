## CSS

```css
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
