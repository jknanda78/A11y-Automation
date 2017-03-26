import React from "react";
import ReactDOM from "react-dom";
import CreateAccountForm from "./create-account";

require("../../scss/style.scss");

const Main = React.createClass({
  render: function() {
    return (
      <div>
        <header role="banner">
          <h1>A11y Automation</h1>
          <nav>
            <ul>
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>
        <main role="main">
          <CreateAccountForm />
        </main>
        <footer role="contentinfo">
          <p>&copy;2016-2017</p>
        </footer>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById("container"));
