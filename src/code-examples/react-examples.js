import React from 'react';
import {
  Alert,
  Container, 
  Row, 
  Col
} from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';


class AlertExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Alert color="primary">
                This is a primary alert — check it out!
              </Alert>
              <Alert color="secondary">
                This is a secondary alert — check it out!
              </Alert>
              <Alert color="success">
                This is a success alert — check it out!
              </Alert>
              <Alert color="danger">
                This is a danger alert — check it out!
              </Alert>
              <Alert color="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert color="info">
                This is a info alert — check it out!
              </Alert>
              <Alert color="light">
                This is a light alert — check it out!
              </Alert>
              <Alert color="dark">
                This is a dark alert — check it out!
              </Alert>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Alert } from 'AURORAIUMPORT';

const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>
    </div>
  );
};

export default Example;
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class AlertExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Alert color="primary">
                This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="secondary">
                This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="success">
                This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="danger">
                This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="warning">
                This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="info">
                This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="light">
                This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
              <Alert color="dark">
                This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </Alert>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Alert } from 'auroraIMPORT';

const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="success">
        This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="warning">
        This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="info">
        This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="light">
        This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="dark">
        This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
    </div>
  );
};

export default Example;
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Using the reactstrap version for the example!
class AlertExample3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
              I am an alert and I can be dismissed!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Alert } from 'reactstrap';

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
    );
  }
}

export default AlertExample;
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export { 
  AlertExample1,
  AlertExample2,
  AlertExample3
};