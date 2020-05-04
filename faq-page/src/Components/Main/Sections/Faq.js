import React, { PureComponent } from "react";

class FAQ extends PureComponent {
  state = { toggle: false, value: null };

  render() {
    return (
      <section id="faq">
        <div className="container">
          <h1>FAQ</h1>
          <ul>
            <li
              className={
                this.state.toggle && this.state.value === 1
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 1 })
              }
            >
              <div className="topic">
                <h4>Your Account Dashboard</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 1
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 2
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 2 })
              }
            >
              <div className="topic">
                <h4>Understanding company billing and accounts</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 2
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 3
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 3 })
              }
            >
              <div className="topic">
                <h4>Updating your billing credit card</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 3
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 4
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 4 })
              }
            >
              <div className="topic">
                <h4>Cancelling a website subscription</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 4
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 5
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 5 })
              }
            >
              <div className="topic">
                <h4>Getting started with our application</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 5
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 6
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 6 })
              }
            >
              <div className="topic">
                <h4>Application keyboard shortcuts and tips</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 6
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
            <li
              className={
                this.state.toggle && this.state.value === 7
                  ? "question open"
                  : "question"
              }
              onClick={() =>
                this.setState({ toggle: !this.state.toggle, value: 7 })
              }
            >
              <div className="topic">
                <h4>Accepted currencies for product billing</h4>
              </div>
              <div
                className={
                  this.state.toggle && this.state.value === 7
                    ? "anwser open"
                    : "anwser"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                  Consequat nisl vel pretium lectus quam id. Quis hendrerit
                  dolor magna eget est lorem ipsum dolor sit. At erat
                  pellentesque adipiscing commodo elit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default FAQ;
