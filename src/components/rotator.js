import React from "react";
import Burger from "../assets/imgs/Burger.jpg";
import Crool from "../assets/imgs/Crool.jpg";
import EmpManager from "../assets/imgs/EmpManager.jpg";
import FYC from "../assets/imgs/FYC.jpg";
import NoteT from "../assets/imgs/NoteT.jpg";
import TeamGen from "../assets/imgs/TeamGen.jpg";

import Card from "../components/projcard";
import { Container, Row } from "react-bootstrap";

class Rotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Burger Menu",
          subtitle: "App allowing for creation and consumption of burgers",
          imgSrc: Burger,
          link: "https://fierce-chamber-77163.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Crool",
          subtitle: "Chatbot that is relentlessly mean to user",
          imgSrc: Crool,
          link: "https://github.com/garshtoshteles/Project-2/",
          selected: false,
        },
        {
          id: 2,
          title: "Employee Manager",
          subtitle: "Terminal program that manages employee database",
          imgSrc: EmpManager,
          link: "https://github.com/garshtoshteles/11homework",
          selected: false,
        },
        {
          id: 3,
          title: "Find Your Climb",
          subtitle: "Search for climbing routes near you",
          imgSrc: FYC,
          link: "https://josephtorres1.github.io/Project-1/",
          selected: false,
        },
        {
          id: 4,
          title: "Note Taker",
          subtitle: "Allows user to create, update, delete notes",
          imgSrc: NoteT,
          link: "https://quiet-stream-81625.herokuapp.com/",
          selected: false,
        },
        {
          id: 5,
          title: "Team Profile Generator",
          subtitle: "Create a staff page using terminal",
          imgSrc: TeamGen,
          link: "https://github.com/garshtoshteles/9homework",
          selected: false,
        },
      ],
    };
  }

  handleCC = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCC(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Rotator;
