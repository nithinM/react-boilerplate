import React, { Component } from "react";
import AppRouter from "../routers/AppRouter";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="c-container">
        <main className="c-wrapper">
          <AppRouter />
        </main>
      </div>
    );
  }
}

export default Main;
