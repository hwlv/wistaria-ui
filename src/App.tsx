import React, { useEffect, useState } from "react";
import "./App.css";

// state异步问题
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isChanged: "false",
      val: 0,
      data: "hello",
    };
  }
  componentDidUpdate() {
    console.log("SuperComponent DidUpdate");
  }
  componentDidMount() {}
  handleClick() {
    this.setState({ val: 99 });
    console.log("click  " + this.state.val);
  }
  render() {
    return <div>app</div>;
  }
}

export default App;
