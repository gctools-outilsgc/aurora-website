import React from 'react';
import {
  Button,
  Fade,
  Container,
  Row,
  Col
} from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';



class FadeExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
  }

  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
            <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Button, Fade } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};
            `} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <h3>Properties</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
Fade.propTypes = {
  // Controls if the fade is currently showing or not (default: true)
  in: PropTypes.bool, 

  // All of these match react-transition-group/Transition props
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool, // (default: true)
  enter: PropTypes.bool,  // (default: true)
  exit: PropTypes.bool,   // (default: true)
  timeout: PropTypes.oneOfType([ // (default: 150)
      PropTypes.number,
      PropTypes.shape({
          enter: PropTypes.number,
          exit: PropTypes.number,
      }).isRequired,
  ]),
  addEndListener: PropTypes.func,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,

  // The component(s) that should be faded
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
  // Pass in a component or primitive component name to override the default element
  // (default: 'div')
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // Class always applied to the Fade element (default: 'fade')
  baseClass: PropTypes.string,
  // Class applied to transition the Fade element in (default: 'show')
  baseClassActive: PropTypes.string,
  // Other classes that should always be applied
  className: PropTypes.string,
  cssModule: PropTypes.object,

  // Any other props provided will be applied to the element created (specified by tag)
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export { 
  FadeExample1
};