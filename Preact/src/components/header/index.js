import { h } from 'preact';
import { useState } from 'preact/hooks';
import htm from 'htm';
// import { Link } from 'preact-router/match';
import style from './style';

const html = htm.bind(h);

const Header = () => {
  const [count, setCount] = useState(0);

  return html`
    <header class="${style.header}">
      <h1>Header ${count}</h1>
      <button onclick="${() => setCount(count + 1)}">up</button>
      <p>lorem ipsum</p>
    </header>
  `;
};

export default Header;
