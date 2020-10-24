import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "T. Scott Portfolio",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "T. Scott",
        subtitle: "Projects",
        text:
          "The projects within this page are the culmination of my web development knowledge.",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Get in Touch",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> T. Scott </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About
                title={this.state.about.title}
                subtitle={this.state.about.subtitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact
                title={this.state.contact.title}
                subtitle={this.state.contact.subtitle}
                text={this.state.contact.text}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
