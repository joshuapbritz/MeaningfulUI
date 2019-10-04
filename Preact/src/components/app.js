import { h, Component } from 'preact';
import { Router, Link } from 'preact-router';
import styles from './app.css';

// import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Info from '../routes/info';
import Settings from '../routes/settings';
// import Profile from '../routes/profile';

export default class App extends Component {
  state = {
    stateValue: 'home',
    followed: false,
  };

  handleRoute = e => {
    const url = e.url.substring(1);

    this.currentUrl = url;

    this.setState({
      stateValue: url === '' ? 'home' : url,
    });
  };

  render() {
    return (
      <main id="app">
        <nav class={`${styles.navbar} ${this.state.stateValue}`}>
          <ul className="links">
            <li>
              <Link class={this.currentUrl === '' ? 'active' : ''} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                class={this.currentUrl === 'info' ? 'active' : ''}
                href="/info"
              >
                Info
              </Link>
            </li>
            <li>
              <Link
                class={this.currentUrl === 'settings' ? 'active' : ''}
                href="/settings"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <header>
          <div class={styles.innerWrapper}>
            <div
              class={`button ${this.state.stateValue} ${
                this.state.followed ? 'followed' : ''
              }`}
              onClick={() => this.setState({ followed: !this.state.followed })}
            ></div>
            <div class={`image ${this.state.stateValue}`}></div>
            <div class={`name ${this.state.stateValue}`}></div>
          </div>
        </header>

        <Router onChange={this.handleRoute}>
          <Home path="/" stateValue={this.state.stateValue} />
          <Info path="/info" stateValue={this.state.stateValue} />
          <Settings path="/settings" stateValue={this.state.stateValue} />
        </Router>
      </main>
    );
  }
}
