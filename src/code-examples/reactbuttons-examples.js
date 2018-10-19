import React from 'react';
import { Button, ButtonGroup, Container, Card, CardGroup, CardBody, CardText, CardTitle,
   Row, Col } from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';

// Buttons
class ButtonExample1 extends React.Component
{
  render(){
  return (
  <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
    <Row>
      <Col lg="12" md="12" xs="12">
        <div>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="success">success</Button>
          <Button color="info">info</Button>
          <Button color="warning">warning</Button>
          <Button color="danger">danger</Button>
          <Button color="link">link</Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="12" md="12" xs="12">
        <ReactCodeBlock react={`
        <div>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </div>
        `}
        />
      </Col>
    </Row>
  </Container>
);}
}

// tags
class ButtonExample1Properties extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              Button.propTypes = {
                active: PropTypes.bool,
                block: PropTypes.bool,
                color: PropTypes.string, // default: 'secondary'
                disabled: PropTypes.bool,

                // Pass in a Component to override default button element
                // example: react-router Link
                // default: 'button'
                tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

                // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
                innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

                onClick: PropTypes.func,
                size: PropTypes.string,

                // use close prop for BS4 close icon utility
                close: PropTypes.bool,
              }
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// outline
class ButtonExample2 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Button outline color="primary">primary</Button>{' '}
              <Button outline color="secondary">secondary</Button>{' '}
              <Button outline color="success">success</Button>{' '}
              <Button outline color="info">info</Button>{' '}
              <Button outline color="warning">warning</Button>{' '}
              <Button outline color="danger">danger</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <div>
              <Button outline color="primary">primary</Button>{' '}
              <Button outline color="secondary">secondary</Button>{' '}
              <Button outline color="success">success</Button>{' '}
              <Button outline color="info">info</Button>{' '}
              <Button outline color="warning">warning</Button>{' '}
              <Button outline color="danger">danger</Button>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - large
class ButtonExample3 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Button color="primary" size="lg">Large Button</Button>{' '}
            <Button color="secondary" size="lg">Large Button</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <Button color="primary" size="lg">Large Button</Button>{' '}
            <Button color="secondary" size="lg">Large Button</Button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - small
class ButtonExample4 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Button color="primary" size="sm">Small Button</Button>{' '}
            <Button color="secondary" size="sm">Small Button</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <Button color="primary" size="sm">Small Button</Button>{' '}
            <Button color="secondary" size="sm">Small Button</Button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - large-block
class ButtonExample5 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button color="secondary" size="lg" block>Block level button</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button color="secondary" size="lg" block>Block level button</Button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// active state
class ButtonExample6 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Button color="primary" size="lg" active>Primary link</Button>{' '}
            <Button color="secondary" size="lg" active>Link</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <Button color="primary" size="lg" active>Primary link</Button>{' '}
            <Button color="secondary" size="lg" active>Link</Button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// disabled
class ButtonExample7 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
            <Button color="secondary" size="lg" disabled>Button</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
            <Button color="secondary" size="lg" disabled>Button</Button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// checkbox -radio
class ButtonExample8 extends React.Component
{
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
              </ButtonGroup>
              <p>Selected: {this.state.rSelected}</p>

              <h5>Checkbox Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
              </ButtonGroup>
              <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              import React, { Component } from 'react';
              import { Button, ButtonGroup } from 'reactstrap';

              class Example extends Component {
                constructor (props) {
                  super(props);

                  this.state = { cSelected: [] };

                  this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
                  this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
                }

                onRadioBtnClick(rSelected) {
                  this.setState({ rSelected });
                }

                onCheckboxBtnClick(selected) {
                  const index = this.state.cSelected.indexOf(selected);
                  if (index < 0) {
                    this.state.cSelected.push(selected);
                  } else {
                    this.state.cSelected.splice(index, 1);
                  }
                  this.setState({ cSelected: [...this.state.cSelected] });
                }

                render() {
                  return (
                    <div>
                      <h5>Radio Buttons</h5>
                      <ButtonGroup>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
                      </ButtonGroup>
                      <p>Selected: {this.state.rSelected}</p>

                      <h5>Checkbox Buttons</h5>
                      <ButtonGroup>
                        <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                        <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                        <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                      </ButtonGroup>
                      <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
                    </div>
                  );
                }
              }

              export default Example;
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class ButtonExample9 extends React.Component
{
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <CardGroup>
                <Card>
                  <CardBody>
                    <CardTitle>

                      <Button close />

                    </CardTitle>
                    <CardText>Default close icon</CardText>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle>

                      <Button close aria-label="Cancel">
                        <span aria-hidden>&ndash;</span>
                      </Button>

                    </CardTitle>
                    <CardText>
                    Custom content and aria-label
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';

const Example = () => (
  <div>
    <CardGroup>
      <Card>
        <CardBody>
          <CardTitle>

            <Button close />

          </CardTitle>
          <CardText>Default close icon</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>

            <Button close aria-label="Cancel">
              <span aria-hidden>&ndash;</span>
            </Button>

          </CardTitle>
          <CardText>
          Custom content and aria-label
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>


  </div>
);

export default Example;
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export {
  ButtonExample1,
  ButtonExample1Properties,
  ButtonExample2,
  ButtonExample3,
  ButtonExample4,
  ButtonExample5,
  ButtonExample6,
  ButtonExample7,
  ButtonExample8,
  ButtonExample9
}