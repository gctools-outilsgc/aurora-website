import React from 'react';
import {
  Alert,
  Container, 
  Row, 
  Col
} from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';


class AlertExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <div className="alert alert-success" role="alert">
                <strong>Well done!</strong> You successfully read this important alert message.
              </div>
              <div className="alert alert-info" role="alert">
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
              </div>
              <div className="alert alert-warning" role="alert">
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </div>
              <div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
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
              <div className="alert alert-success" role="alert">
                <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
              </div>
              <div className="alert alert-info" role="alert">
                <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
              </div>
              <div className="alert alert-warning" role="alert">
                <strong>Warning!</strong> Better check yourself, you're <a href="#" className="alert-link">not looking too good</a>.
              </div>
              <div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> <a href="#" className="alert-lNameink">Change a few things up</a> and try submitting again.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
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
            <HtmlCodeBlock html={`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>
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