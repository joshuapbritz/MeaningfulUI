import { h, Component } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

import Header from './header';

// // Code-splitting is automated for routes
// import Home from '../routes/home';
// import Profile from '../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  state = {
    message: 'Hello World',
  };

  render() {
    return html`
      <main class="main-wrapper">
        <${Header} />
        <p>Some things</p>
      </main>
    `;
  }
}
