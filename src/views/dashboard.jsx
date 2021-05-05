import React from "react";
import styled from "styled-components";
import Node from "../component/node";
import "../assets/css/dashboard.css";
import axios from "axios";
import bg from "../assets/img/bg.jpg";

const AppContainer = styled.div`
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: auto;
margin:0px;
padding-top:50vh;
`;



export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node1:"connected",
      node2:"connected",
      node3:"connected"
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(key){
    console.log(key);
    if(key===9)
    {
      this.setState({node2:"connected"})
      this.setState({node3:"connected"});
    }
    else if(key==10)
    {
      this.setState({node2:"disconnected"})
      this.setState({node3:"connected"});
    }
    else if(key==11)
    {
      this.setState({node3:"disconnected"})
      this.setState({node2:"connected"});
    }
  }

  componentDidMount() {
    //this.timerId = setInterval(() => this.fetchData(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  fetchData() {
    if(this.state.node1=="connected")
    {
      if(this.state.node2=="connected")
      {
        this.setState({node3:"connected"})
        this.setState({node2:"disconnected"});
      }
      else
      {
        this.setState({node2:"connected"})
        this.setState({node3:"disconnected"})
      }
    }
  }

  render() {
    const data = [
      {
        key: 1,
        nodeNumber: "01",
        status: this.state.node1,
        streetName: "Street-1(Pole-1)"
      },
      {
        key: 2,
        nodeNumber: "02",
        status: this.state.node2,
        streetName: "Street-1(Pole-2)"
      },
      {
        key: 3,
        nodeNumber: "03",
        status: this.state.node3,
        streetName: "Street-1(Pole-3)"
      },
      {
        key: 4,
        nodeNumber: "04",
        status: "connected",
        streetName: "Street-1(Pole-4)"
      },
      {
        key: 5,
        nodeNumber: "05",
        status: "connected",
        streetName: "Street-2(Pole-1)"
      },
      {
        key: 6,
        nodeNumber: "06",
        status: "connected",
        streetName: "Street-2(Pole-2)"
      },
      {
        key: 7,
        nodeNumber: "07",
        status: "connected",
        streetName: "Street-2(Pole-3)"
      },
      {
        key: 8,
        nodeNumber: "08",
        status: "connected",
        streetName: "Street-2(Pole-4)"
      },
      {
        key: 9,
        nodeNumber: "09",
        status: "connected",
        streetName: "Street-3(Pole-1)"
      },
      {
        key: 10,
        nodeNumber: "10",
        status: "connected",
        streetName: "Street-3(Pole-2)"
      },
      {
        key: 11,
        nodeNumber: "11",
        status: "connected",
        streetName: "Street-3(Pole-3)"
      },
      {
        key: 12,
        nodeNumber: "12",
        status: "connected",
        streetName: "Street-3(Pole-4)"
      },
      {
        key: 13,
        nodeNumber: "13",
        status: "connected",
        streetName: "Street-4(Pole-1)"
      },
      {
        key:14,
        nodeNumber: "14",
        status: "connected",
        streetName: "Street-4(Pole-2)"
      },
      {
        key: 15,
        nodeNumber: "15",
        status: "connected",
        streetName: "Street-4(Pole-3)"
      },
      {
        key: 16,
        nodeNumber: "16",
        status: "connected",
        streetName: "Street-4(Pole-4)"
      },
    ];
    const nodes = data.map((item) => {
      return (
        <>
          <Node
            nodeNumber={item.nodeNumber}
            status={item.status}
            value={item.key}
            streetName={item.streetName}
            changeState={this.changeState}
          />
          <p className={(item.key % 4 !== 0 && item.status=="connected" )?"dashed":"notdashed"} style={{color:"green", fontWeight:"1000"}}>
            --------
          </p>
          <p className={(item.status=="disconnected" )?"dashed":"notdashed"} style={{color:"red"}}>
            -X-X-X-X-
          </p>
          <br style={{ display: item.key % 4 === 0 ? "block" : "none" }} />
        </>
      );
    });
    return <AppContainer id="dashboard">{nodes}</AppContainer>;
  }
}
