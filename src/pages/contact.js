import React from "react";
import Hero from "../components/hero";
import Content from "../components/content";
import { Form, Button } from "react-bootstrap";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailsent: null,
    };
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name:</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message:</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="5"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
