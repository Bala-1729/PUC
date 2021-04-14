import React from "react";
import Node from "../component/node";
import "../assets/css/dashboard.css";
import axios from "axios";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
    this.timerId = setInterval(() => this.fetchData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  fetchData() {}

  render() {
    const data = [
      {
        key: 1,
        nodeNumber: "01",
        status: "connected",
      },
      {
        key: 2,
        nodeNumber: "02",
        status: "connected",
      },
      {
        key: 3,
        nodeNumber: "03",
        status: "disconnected",
      },
      {
        key: 4,
        nodeNumber: "04",
        status: "connected",
      },
      {
        key: 5,
        nodeNumber: "05",
        status: "connected",
      },
      {
        key: 6,
        nodeNumber: "06",
        status: "connected",
      },
      {
        key: 7,
        nodeNumber: "07",
        status: "disconnected",
      },
      {
        key: 8,
        nodeNumber: "08",
        status: "connected",
      },
      {
        key: 9,
        nodeNumber: "09",
        status: "connected",
      },
      {
        key: 10,
        nodeNumber: "10",
        status: "connected",
      },
      {
        key: 11,
        nodeNumber: "11",
        status: "connected",
      },
      {
        key: 12,
        nodeNumber: "12",
        status: "connected",
      },
      {
        key: 13,
        nodeNumber: "13",
        status: "connected",
      },
      {
        key:14,
        nodeNumber: "14",
        status: "connected",
      },
      {
        key: 15,
        nodeNumber: "15",
        status: "connected",
      },
      {
        key: 16,
        nodeNumber: "16",
        status: "connected",
      },
    ];
    const nodes = data.map((item) => {
      return (
        <>
          <Node
            nodeNumber={item.nodeNumber}
            status={item.status}
            key={item.key}
          />
          <p className={(item.key % 4 !== 0 && item.status=="connected" )?"dashed":"notdashed"} style={{color:"green"}}>
            --------
          </p>
          <p className={(item.status=="disconnected" )?"dashed":"notdashed"} style={{color:"red"}}>
            -X-X-X-X-
          </p>
          <br style={{ display: item.key % 4 === 0 ? "block" : "none" }} />
        </>
      );
    });
    return <div id="dashboard">{nodes}</div>;
  }
}
