import React from "react";
import "../assets/css/node.css";

export default class Node extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let title= "NodeNumber: "+this.props.nodeNumber+"\n Status: "+this.props.status+"\n Street Name: "+this.props.streetName;
    return (
      <div title={title}>
        <button
          className={
            this.props.status == "connected" ? "connected" : "disconnected"
          }

          onClick={() => this.props.changeState(this.props.value)}
        >
          Node {this.props.nodeNumber}
        </button>
      </div>
    );
  }
}
