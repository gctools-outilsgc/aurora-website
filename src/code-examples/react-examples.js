import React from 'react';
import {
  Form, FormGroup, Label, Input, FormText,
  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardLink,
  Breadcrumb, 
  BreadcrumbItem,
  Button,
  Badge,
  Alert,
  Container, 
  Row, 
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade,
  Jumbotron,
  Media,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  Form, FormGroup, Label, Input, FormText,
  CardImg, CardColumns,
  CardSubtitle, CardBody, CardLink,
  Breadcrumb, 
  BreadcrumbItem,
  Badge,
  Table, 
  Dropdown,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Tooltip, 
  UncontrolledTooltip,
  Popover, PopoverHeader, PopoverBody,
  ButtonGroup, CardGroup,
  ButtonDropdown, UncontrolledButtonDropdown,
  ButtonToolbar,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupButtonDropdown,
  ListGroup,
  ListGroupItem
} from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';
import classnames from 'classnames';

const items = [
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+1',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+2',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+3',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

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

class JumbotronExample extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
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
Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};
            `} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <h3>Fluid Jumbotron</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
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

class TabsExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Moar Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class MediaExample extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Media>
              <Media left href="#">
                <Media object src= "https://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object src= "https://via.placeholder.com/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default Example;
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
Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};
            `} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <h3>Nesting</h3>
            <Media>
              <Media left href="#">
                <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                <Media>
                  <Media left href="#">
                    <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      Nested media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </Media>
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <Media>
          <Media left href="#">
            <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Nested media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    </Media>
  );
};

export default Example;
            `} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <h3>Alignment</h3>
            <div>
              <Media>
                <Media left top href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Top aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
              <Media className="mt-1">
                <Media left middle href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Middle aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
              <Media className="mt-1">
                <Media left bottom href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Bottom aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Media>
        <Media left top href="#">
          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default Example;
            `} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <h3>Media list</h3>
            <Media list>
              <Media tag="li">
                <Media left href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  <Media>
                    <Media left href="#">
                      <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                        Nested media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      <Media>
                        <Media left href="#">
                          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                          <Media heading>
                            Nested media heading
                          </Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                      </Media>
                    </Media>
                  </Media>
                  <Media>
                    <Media left href="#">
                      <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                        Nested media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>
                </Media>
              </Media>
              <Media tag="li">
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
                <Media right href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <Media list>
      <Media tag="li">
        <Media left href="#">
          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href="#">
              <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Nested media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <Media>
                <Media left href="#">
                  <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Nested media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Media>
          </Media>
          <Media>
            <Media left href="#">
              <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Nested media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Media>
      </Media>
      <Media tag="li">
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        <Media right href="#">
          <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
        </Media>
      </Media>
    </Media>
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

// class NavBarExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return(
//       <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <div>
//               <Navbar color="light" light expand="md">
//                 <NavbarBrand href="/">Aurora</NavbarBrand>
//                 <NavbarToggler onClick={this.toggle} />
//                 <Collapse isOpen={this.state.isOpen} navbar>
//                   <Nav className="ml-auto" navbar>
//                     <NavItem>
//                       <NavLink href="/components/">Components</NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                     </NavItem>
//                     <UncontrolledDropdown nav inNavbar>
//                       <DropdownToggle nav caret>
//                         Options
//                       </DropdownToggle>
//                       <DropdownMenu right>
//                         <DropdownItem>
//                           Option 1
//                         </DropdownItem>
//                         <DropdownItem>
//                           Option 2
//                         </DropdownItem>
//                         <DropdownItem divider />
//                         <DropdownItem>
//                           Reset
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </Nav>
//                 </Collapse>
//               </Navbar>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <ReactCodeBlock react={`
// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
//             `} />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <h3>Navbar Properties</h3>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <ReactCodeBlock react={`
// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }
//             `} />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <h3>NavbarBrand Properties</h3>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <ReactCodeBlock react={`
// NavbarBrand.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }
//             `} />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <h3>NavbarToggler</h3>
//             <h5>Place the NavbarToggler after NavbarBrand to have it appear on the right (typical setup). Reverse the order to have it appear on the left</h5>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//           <div>
//             <Navbar color="faded" light>
//               <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//               <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//               <Collapse isOpen={!this.state.collapsed} navbar>
//                 <Nav navbar>
//                   <NavItem>
//                     <NavLink href="/components/">Components</NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                   </NavItem>
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <ReactCodeBlock react={`
// import React from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
//             `} />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <h3>NavbarToggler Properties</h3>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" md="12" xs="12">
//             <ReactCodeBlock react={`
// NavbarToggler.propTypes = {
//   type: PropTypes.string,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }
//             `} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

/** BADGE */

class BadgeExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <h1>Heading <Badge color="secondary">New</Badge></h1>
              <h2>Heading <Badge color="secondary">New</Badge></h2>
              <h3>Heading <Badge color="secondary">New</Badge></h3>
              <h4>Heading <Badge color="secondary">New</Badge></h4>
              <h5>Heading <Badge color="secondary">New</Badge></h5>
              <h6>Heading <Badge color="secondary">New</Badge></h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Badge } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Heading <Badge color="secondary">New</Badge></h1>
        <h2>Heading <Badge color="secondary">New</Badge></h2>
        <h3>Heading <Badge color="secondary">New</Badge></h3>
        <h4>Heading <Badge color="secondary">New</Badge></h4>
        <h5>Heading <Badge color="secondary">New</Badge></h5>
        <h6>Heading <Badge color="secondary">New</Badge></h6>
      </div>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class BadgeExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Button color="primary" outline>
                Notifications <Badge color="secondary">4</Badge>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Badge, Button } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class BadgeExample3 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="light">Light</Badge>
              <Badge color="dark">Dark</Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Badge } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
      </div>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class BreadcrumbExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'aurora-import';

const Example = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
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

class CardExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Col lg="4" md="4" xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Meta Information</CardSubtitle>
                  <CardText>Some quick example text to build on the card title</CardText>
                  <a href="#" className="card-link">Another link</a>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'aurora-component';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Meta Information</CardSubtitle>
          <CardText>Some quick example text to build on the card title</CardText>
          <a href="#" className="card-link">Another link</a>
        </CardBody>
      </Card>
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

class CardExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Col lg="4" md="4" xs="12">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Meta Information</CardSubtitle>
                  <CardText>Some quick example text to build on the card title</CardText>
                  <a href="#" className="card-link">Another link</a>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'aurora-component';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Meta Information</CardSubtitle>
          <CardText>Some quick example text to build on the card title</CardText>
          <a href="#" className="card-link">Another link</a>
        </CardBody>
      </Card>
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

class CardExample3 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Col lg="4" md="4" xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'aurora-component';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
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

class CardExample4 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <CardColumns>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </Card>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="secondary">Button</Button>
              </Card>
            </CardColumns>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'aurora-import';

const Example = (props) => {
  return (
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
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

class FormExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Option three is disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class LayoutExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Container>
              <Row>
                <Col style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col</Col>
              </Row>
              <Row>
                <Col style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col</Col>
                <Col style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col</Col>
                <Col style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col</Col>
                <Col style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col</Col>
              </Row>
              <Row>
                <Col xs="3" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-3</Col>
                <Col xs="auto" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-auto - variable width content</Col>
                <Col xs="3" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-3</Col>
              </Row>
              <Row>
                <Col xs="6" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-6</Col>
                <Col xs="6" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-6</Col>
              </Row>
              <Row>
                <Col xs="6" sm="4" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-6 .col-sm-4</Col>
                <Col xs="6" sm="4" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-6 .col-sm-4</Col>
                <Col sm="4" style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-sm-4</Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }} style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
              </Row>
              <Row>
                <Col sm={{ size: 'auto', offset: 1 }} style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-sm .col-sm-offset-1</Col>
                <Col sm={{ size: 'auto', offset: 1 }} style={{paddingTop: ".75rem", paddingBottom: ".75rem", backgroundColor: "#E5EDF5", border: "1px solid #C9C1D5", color: "#5F5F5F"}}>.col-sm .col-sm-offset-1</Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Container, Row, Col } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
        </Row>
      </Container>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample3 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample4 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample5 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table borderless>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample6 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample7 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TableExample8 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
import React from 'react';
import { Table } from 'aurora-import';

export default class Example extends React.Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Dropdown1 extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
  }
  
  toggle() {
  this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
  }));
  }
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
              Dropdown button
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
          </Dropdown>
            <ReactCodeBlock html={`
<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
  Dropdown button
  </DropdownToggle>
  <DropdownMenu>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
  </DropdownMenu>
</Dropdown>
            `} />
      </Container>
    );
  }
}

class Dropdown2 extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
          dropdownOpen: false
      };
  }

  toggle() {
      this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
      }));
  }
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                  This dropdown's menu is right-aligned
              </DropdownToggle>
              <DropdownMenu right>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
          </Dropdown>
              <ReactCodeBlock html={`
<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
      This dropdown's menu is right-aligned
  </DropdownToggle>
  <DropdownMenu right>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
  </DropdownMenu>
</Dropdown>
              `} />
      </Container>
      );
  }
}

class Dropdown3 extends React.Component {
  constructor(props) {
      super(props);

      this.toggle1 = this.toggle1.bind(this);
      this.toggle2 = this.toggle2.bind(this);
      this.toggle3 = this.toggle3.bind(this);
      this.state = {
          dropdownOpen1: false,
          dropdownOpen2: false,
          dropdownOpen3: false
      };
  }

  toggle1() {
      this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
      }));
  }
  toggle2() {
      this.setState(prevState => ({
          dropdownOpen2: !prevState.dropdownOpen2
      }));
  }
  toggle3() {
      this.setState(prevState => ({
          dropdownOpen3: !prevState.dropdownOpen3
      }));
  }
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Dropdown style={{marginBottom: "10px"}} group isOpen={this.state.dropdownOpen1} size="lg" toggle={this.toggle1}>
              <DropdownToggle caret>
                  Dropdown
              </DropdownToggle>
              <DropdownMenu>
                  ...
              </DropdownMenu>
          </Dropdown>

          <Dropdown style={{marginBottom: "10px"}} isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
              <DropdownToggle caret>
                  Dropdown
              </DropdownToggle>
              <DropdownMenu>
                  ...
              </DropdownMenu>
          </Dropdown>

          <Dropdown group isOpen={this.state.dropdownOpen3} size="sm" toggle={this.toggle3}>
              <DropdownToggle caret>
                  Dropdown
              </DropdownToggle>
              <DropdownMenu>
                  ...
              </DropdownMenu>
          </Dropdown>
              <ReactCodeBlock html={`
  <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
      <DropdownToggle caret>
          Dropdown
      </DropdownToggle>
      <DropdownMenu>
          ...
      </DropdownMenu>
  </Dropdown>
  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
          Dropdown
      </DropdownToggle>
      <DropdownMenu>
          ...
      </DropdownMenu>
  </Dropdown>
  <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
      <DropdownToggle caret>
          Dropdown
      </DropdownToggle>
      <DropdownMenu>
          ...
      </DropdownMenu>
  </Dropdown>
              `} />
      </Container>
      );
  }
}

class Progress1 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <div className="text-center">0%</div>
              <Progress />
              <div className="text-center">25%</div>
              <Progress value="25" />
              <div className="text-center">50%</div>
              <Progress value={50} />
              <div className="text-center">75%</div>
              <Progress value={75} />
              <div className="text-center">100%</div>
              <Progress value="100" />
              <div className="text-center">Multiple bars</div>
              <Progress multi>
                  <Progress bar value="15" />
                  <Progress bar color="success" value="30" />
                  <Progress bar color="info" value="25" />
                  <Progress bar color="warning" value="20" />
                  <Progress bar color="danger" value="5" />
              </Progress>
          </div>
              <ReactCodeBlock html={`
<div>
  <div className="text-center">0%</div>
  <Progress />
  <div className="text-center">25%</div>
  <Progress value="25" />
  <div className="text-center">50%</div>
  <Progress value={50} />
  <div className="text-center">75%</div>
  <Progress value={75} />
  <div className="text-center">100%</div>
  <Progress value="100" />
  <div className="text-center">Multiple bars</div>
  <Progress multi>
      <Progress bar value="15" />
      <Progress bar color="success" value="30" />
      <Progress bar color="info" value="25" />
      <Progress bar color="warning" value="20" />
      <Progress bar color="danger" value="5" />
  </Progress>
</div>
              `} />
      </Container>
      );
  }
}

class Progress2 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Progress style={{marginBottom: "5px"}} value={2 * 5} />
              <Progress style={{marginBottom: "5px"}} color="success" value="25" />
              <Progress style={{marginBottom: "5px"}} color="info" value={50} />
              <Progress style={{marginBottom: "5px"}} color="warning" value={75} />
              <Progress color="danger" value="100" />
          </div>
              <ReactCodeBlock html={`
<div>
  <Progress value={2 * 5} />
  <Progress color="success" value="25" />
  <Progress color="info" value={50} />
  <Progress color="warning" value={75} />
  <Progress color="danger" value="100" />
</div>
              `} />
      </Container>
      );
  }
}

class Progress3 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Progress style={{marginBottom: "5px"}} value="25">25%</Progress>
              <Progress style={{marginBottom: "5px"}} value={50}>1/2</Progress>
              <Progress style={{marginBottom: "5px"}} value={75}>You're almost there!</Progress>
              <Progress style={{marginBottom: "5px"}} color="success" value="100">You did it!</Progress>
              <Progress multi>
                  <Progress bar value="15">Meh</Progress>
                  <Progress bar color="success" value="30">Wow!</Progress>
                  <Progress bar color="info" value="25">Cool</Progress>
                  <Progress bar color="warning" value="20">20%</Progress>
                  <Progress bar color="danger" value="5">!!</Progress>
              </Progress>
          </div>
              <ReactCodeBlock html={`
<div>
  <Progress value="25">25%</Progress>
  <Progress value={50}>1/2</Progress>
  <Progress value={75}>You're almost there!</Progress>
  <Progress color="success" value="100">You did it!</Progress>
  <Progress multi>
      <Progress bar value="15">Meh</Progress>
      <Progress bar color="success" value="30">Wow!</Progress>
      <Progress bar color="info" value="25">Cool</Progress>
      <Progress bar color="warning" value="20">20%</Progress>
      <Progress bar color="danger" value="5">!!</Progress>
  </Progress>
</div>
              `} />
      </Container>
      );
  }
}

class Progress4 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Progress style={{marginBottom: "5px"}} striped value={2 * 5} />
              <Progress style={{marginBottom: "5px"}} striped color="success" value="25" />
              <Progress style={{marginBottom: "5px"}} striped color="info" value={50} />
              <Progress style={{marginBottom: "5px"}} striped color="warning" value={75} />
              <Progress style={{marginBottom: "5px"}} striped color="danger" value="100" />
              <Progress multi>
                  <Progress striped bar value="10" />
                  <Progress striped bar color="success" value="30" />
                  <Progress striped bar color="warning" value="20" />
                  <Progress striped bar color="danger" value="20" />
              </Progress>
          </div>
              <ReactCodeBlock html={`
<div>
  <Progress striped value={2 * 5} />
  <Progress striped color="success" value="25" />
  <Progress striped color="info" value={50} />
  <Progress striped color="warning" value={75} />
  <Progress striped color="danger" value="100" />
  <Progress multi>
      <Progress striped bar value="10" />
      <Progress striped bar color="success" value="30" />
      <Progress striped bar color="warning" value="20" />
      <Progress striped bar color="danger" value="20" />
  </Progress>
</div>
              `} />
      </Container>
      );
  }
}

class Progress5 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Progress style={{marginBottom: "5px"}} animated value={2 * 5} />
              <Progress style={{marginBottom: "5px"}} animated color="success" value="25" />
              <Progress style={{marginBottom: "5px"}} animated color="info" value={50} />
              <Progress style={{marginBottom: "5px"}} animated color="warning" value={75} />
              <Progress style={{marginBottom: "5px"}} animated color="danger" value="100" />
              <Progress multi>
                  <Progress animated bar value="10" />
                  <Progress animated bar color="success" value="30" />
                  <Progress animated bar color="warning" value="20" />
                  <Progress animated bar color="danger" value="20" />
              </Progress>
          </div>
              <ReactCodeBlock html={`
<div>
  <Progress animated value={2 * 5} />
  <Progress animated color="success" value="25" />
  <Progress animated color="info" value={50} />
  <Progress animated color="warning" value={75} />
  <Progress animated color="danger" value="100" />
  <Progress multi>
      <Progress animated bar value="10" />
      <Progress animated bar color="success" value="30" />
      <Progress animated bar color="warning" value="20" />
      <Progress animated bar color="danger" value="20" />
  </Progress>
</div>
              `} />
      </Container>
      );
  }
}

class Pagination1 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Pagination aria-label="Page navigation example">
              <PaginationItem>
                  <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      1
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      2
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      3
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      4
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      5
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink next href="#" />
              </PaginationItem>
          </Pagination>
              <ReactCodeBlock html={`
<Pagination aria-label="Page navigation example">
  <PaginationItem>
      <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          1
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          2
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          3
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          4
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          5
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink next href="#" />
  </PaginationItem>
</Pagination>
              `} />
      </Container>
      );
  }
}

class Pagination2 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                  <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      1
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      2
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      3
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      4
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      5
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink next href="#" />
              </PaginationItem>
          </Pagination>
              <ReactCodeBlock html={`
<Pagination aria-label="Page navigation example">
  <PaginationItem disabled>
      <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          1
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          2
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          3
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          4
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          5
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink next href="#" />
  </PaginationItem>
</Pagination>
              `} />
      </Container>
      );
  }
}

class Pagination3 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Pagination size="lg" aria-label="Page navigation example">
              <PaginationItem>
                  <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      1
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      2
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      3
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink next href="#" />
              </PaginationItem>
          </Pagination>
              <ReactCodeBlock html={`
<Pagination size="lg" aria-label="Page navigation example">
  <PaginationItem>
      <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          1
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          2
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          3
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink next href="#" />
  </PaginationItem>
</Pagination>
              `} />
      </Container>
      );
  }
}

class Pagination4 extends React.Component {
  render() { 
      return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <Pagination aria-label="Page navigation example">
              <PaginationItem>
                  <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      1
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      2
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink href="#">
                      3
                  </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                  <PaginationLink next href="#" />
              </PaginationItem>
          </Pagination>
              <ReactCodeBlock html={`
<Pagination aria-label="Page navigation example">
  <PaginationItem>
      <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          1
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          2
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink href="#">
          3
      </PaginationLink>
  </PaginationItem>
  <PaginationItem>
      <PaginationLink next href="#" />
  </PaginationItem>
</Pagination>
              `} />
      </Container>
      );
  }
}

class Modal1 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
      this.setState({
          modal: !this.state.modal
      });
  }
  
    render() {
      return (
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Button color="danger" onClick={this.toggle}>Modal</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </Modal>
          </div>
              <ReactCodeBlock html={`
<div>
  <Button color="danger" onClick={this.toggle}>Modal</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
  <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </ModalBody>
  <ModalFooter>
      <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
  </ModalFooter>
  </Modal>
</div>
              `} />
      </Container>
      );
  }
}

class Modal2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        nestedModal: false,
        closeAll: false
      };
  
      this.toggle = this.toggle.bind(this);
      this.toggleNested = this.toggleNested.bind(this);
      this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
      this.setState({
          modal: !this.state.modal
      });
  }

  toggleNested() {
      this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false
      });
  }

  toggleAll() {
      this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: true
      });
  }

    render() {
      return (
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
          <div>
              <Button color="danger" onClick={this.toggle}>Launch Modal with Nested Example</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br />
                  <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
                  <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                  <ModalHeader>Nested Modal title</ModalHeader>
                  <ModalBody>Stuff and things</ModalBody>
                  <ModalFooter>
                      <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                      <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                  </ModalFooter>
                  </Modal>
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </Modal>
          </div>
              <ReactCodeBlock html={`
<div>
  <Button color="danger" onClick={this.toggle}>Launch Modal with Nested Example</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
  <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br />
      <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
      <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
      <ModalHeader>Nested Modal title</ModalHeader>
      <ModalBody>Stuff and things</ModalBody>
      <ModalFooter>
          <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
          <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
      </ModalFooter>
      </Modal>
  </ModalBody>
  <ModalFooter>
      <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
  </ModalFooter>
  </Modal>
</div>
              `} />
      </Container>
      );
  }
}

class TooltipExample1 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <TooltipExampleBase />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */
              import React from 'react';
              import { Tooltip } from 'reactstrap';

              export default class Example extends React.Component {
                constructor(props) {
                  super(props);

                  this.toggle = this.toggle.bind(this);
                  this.state = {
                    tooltipOpen: false
                  };
                }

                toggle() {
                  this.setState({
                    tooltipOpen: !this.state.tooltipOpen
                  });
                }

                render() {
                  return (
                    <div>
                      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                        Hello world!
                      </Tooltip>
                    </div>
                  );
                }
              }
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TooltipExample2 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              Tooltip.propTypes = {
                // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
                boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
                // boolean to control the state of the tooltip
                isOpen: PropTypes.bool,
                hideArrow: PropTypes.bool,
                // callback for toggling isOpen in the controlling component. It will receive an object with info about the event that triggered it
                toggle: PropTypes.func,
                // target element or element ID, popover is attached to this element
                target:  PropTypes.oneOfType([
                  PropTypes.string,
                  PropTypes.func,
                  DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
                ]).isRequired,
                // Where to inject the popper DOM node, default to body
                container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
                // optionally override show/hide delays - default { show: 0, hide: 250 }
                delay: PropTypes.oneOfType([
                  PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
                  PropTypes.number
                ]),
                className: PropTypes.string,
                // Apply class to the inner-tooltip
                innerClassName: PropTypes.string,
                // Apply class to the arrow-tooltip ('arrow' by default)
                arrowClassName: PropTypes.string,
                // optionally hide tooltip when hovering over tooltip content - default true
                autohide: PropTypes.bool,
                // convenience attachments for popover
                placement: PropTypes.oneOf([
                  'auto',
                  'auto-start',
                  'auto-end',
                  'top',
                  'top-start',
                  'top-end',
                  'right',
                  'right-start',
                  'right-end',
                  'bottom',
                  'bottom-start',
                  'bottom-end',
                  'left',
                  'left-start',
                  'left-end',
                ]),
                // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
                modifiers: PropTypes.object,
                offset: PropTypes.oneOfType([
                  PropTypes.string,
                  PropTypes.number
                ]),
                // Custom ref handler that will be assigned to the "ref" of the <div> wrapping the tooltip elements
                innerRef: PropTypes.oneOfType([
                  PropTypes.func,
                  PropTypes.string,
                  PropTypes.object
                ]),
                trigger: PropTypes.string,
              }
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TooltipExample3 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <TooltipAutoHideExample />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */
              import React from 'react';
              import { Tooltip } from 'reactstrap';

              export default class Example extends React.Component {
                constructor(props) {
                  super(props);

                  this.toggle = this.toggle.bind(this);
                  this.state = {
                    tooltipOpen: false
                  };
                }

                toggle() {
                  this.setState({
                    tooltipOpen: !this.state.tooltipOpen
                  });
                }

                render() {
                  return (
                    <div>
                      <p>Sometimes you need to allow users to select text within a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                        Try to select this text!
                      </Tooltip>
                    </div>
                  );
                }
              }
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TooltipExample4 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <TooltipExampleMulti />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

              import React from 'react';
              import { Button, Tooltip } from 'reactstrap';

              class TooltipItem extends React.Component {
                constructor(props) {
                  super(props);

                  this.toggle = this.toggle.bind(this);
                  this.state = {
                    tooltipOpen: false
                  };
                }

                toggle() {
                  this.setState({
                    tooltipOpen: !this.state.tooltipOpen
                  });
                }

                render() {
                  return (
                    <span>
                      <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
                        {this.props.item.text}
                      </Button>
                      <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                        Tooltip Content!
                      </Tooltip>
                    </span>
                  );
                }
              }

              class TooltipExampleMulti extends React.Component {
                constructor(props) {
                  super(props);

                  this.state = {
                    tooltips: [
                      {
                        placement: 'top',
                        text: 'Top'
                      },
                      {
                        placement: 'bottom',
                        text: 'Bottom'
                      },
                      {
                        placement: 'left',
                        text: 'Left'
                      },
                      {
                        placement: 'right',
                        text: 'Right'
                      }
                    ]
                  };
                }

                render() {
                  return (
                    <div>
                      { this.state.tooltips.map((tooltip, i) => {
                        return <TooltipItem key={i} item={tooltip} id={i} />;
                      })}
                    </div>
                  );
                }
              }

              export default TooltipExampleMulti;
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TooltipExample5 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div>
            <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
              Hello world!
            </UncontrolledTooltip>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */
              import React from 'react';
              import { UncontrolledTooltip } from 'reactstrap';

              export default function Example() {
                return (
                  <div>
                    <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
                    <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                      Hello world!
                    </UncontrolledTooltip>
                  </div>
                );
              }
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TooltipExampleBase extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}

export default class TooltipAutoHideExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Sometimes you need to allow users to select text within a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    );
  }
}

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

class TooltipExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        { this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>
    );
  }
}

// BaseExample
class PopoversExample1 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <BaseExample />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */
              import React from 'react';
              import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

              export default class Example extends React.Component {
                constructor(props) {
                  super(props);

                  this.toggle = this.toggle.bind(this);
                  this.state = {
                    popoverOpen: false
                  };
                }

                toggle() {
                  this.setState({
                    popoverOpen: !this.state.popoverOpen
                  });
                }

                render() {
                  return (
                    <div>
                      <Button id="Popover1" onClick={this.toggle}>
                        Launch Popover
                      </Button>
                      <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                      </Popover>
                    </div>
                  );
                }
              }
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// properties
class PopoversExample2 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              Popover.propTypes = {
                // boolean to control the state of the popover
                isOpen:  PropTypes.bool,
                // callback for toggling isOpen in the controlling component
                toggle:  PropTypes.func,
                // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
                boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
                target:  PropTypes.oneOfType([
                  PropTypes.string,
                  PropTypes.func,
                  DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
                ]).isRequired,
                // Where to inject the popper DOM node, default to body
                container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
                className: PropTypes.string,
                // Apply class to the inner-popover
                innerClassName: PropTypes.string,
                disabled: PropTypes.bool,
                hideArrow: PropTypes.bool,
                placementPrefix: PropTypes.string,
                delay: PropTypes.oneOfType([
                  PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
                  PropTypes.number,
                ]),
                placement: PropTypes.oneOf([
                  'auto',
                  'auto-start',
                  'auto-end',
                  'top',
                  'top-start',
                  'top-end',
                  'right',
                  'right-start',
                  'right-end',
                  'bottom',
                  'bottom-start',
                  'bottom-end',
                  'left',
                  'left-start',
                  'left-end',
                ]),
                // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
                modifiers: PropTypes.object,
                offset: PropTypes.oneOfType([
                  PropTypes.string,
                  PropTypes.number
                ])
              }
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

//multi
class PopoversExample3 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <PopoverExampleMulti />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

              import React from 'react';
              import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
              
              class PopoverItem extends React.Component {
                constructor(props) {
                  super(props);
              
                  this.toggle = this.toggle.bind(this);
                  this.state = {
                    popoverOpen: false
                  };
                }
              
                toggle() {
                  this.setState({
                    popoverOpen: !this.state.popoverOpen
                  });
                }
              
                render() {
                  return (
                    <span>
                      <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
                        {this.props.item.text}
                      </Button>
                      <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                      </Popover>
                    </span>
                  );
                }
              }
              
              class PopoverExampleMulti extends React.Component {
                constructor(props) {
                  super(props);
              
                  this.state = {
                    popovers: [
                      {
                        placement: 'top',
                        text: 'Top'
                      },
                      {
                        placement: 'bottom',
                        text: 'Bottom'
                      },
                      {
                        placement: 'left',
                        text: 'Left'
                      },
                      {
                        placement: 'right',
                        text: 'Right'
                      }
                    ]
                  };
                }
              
                render() {
                  return (
                    <div>
                      { this.state.popovers.map((popover, i) => {
                        return <PopoverItem key={i} item={popover} id={i} />;
                      })}
                    </div>
                  );
                }
              }
              
              export default PopoverExampleMulti;
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class BaseExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}

class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </span>
    );
  }
}

class PopoverExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        { this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>
    );
  }
}

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

// Button dropdown
class ButtonDropDownExample1 extends React.Component
{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonDropDownBaseExample />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            import React from 'react';
            import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

            export default class Example extends React.Component {
              constructor(props) {
                super(props);

                this.toggle = this.toggle.bind(this);
                this.state = {
                  dropdownOpen: false
                };
              }

              toggle() {
                this.setState({
                  dropdownOpen: !this.state.dropdownOpen
                });
              }

              render() {
                return (
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                );
              }
            }
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Buttons dropdown properties
class ButtonDropDownExample1Properties extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            ButtonDropdown.propTypes = {
              disabled: PropTypes.bool,
              direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
              group: PropTypes.bool,
              isOpen: PropTypes.bool,
              tag: PropTypes.string,
              toggle: PropTypes.func
            };

            DropdownToggle.propTypes = {
              caret: PropTypes.bool,
              color: PropTypes.string,
              disabled: PropTypes.bool,
              onClick: PropTypes.func,
              'data-toggle': PropTypes.string,
              'aria-haspopup': PropTypes.bool
            };`}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Single button dropdown
class ButtonDropDownExample2 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <Example color="primary" text="Primary" />
              <Example color="secondary" text="Secondary" />
              <Example color="success" text="Success" />
              <Example color="info" text="Info" />
              <Example color="warning" text="Warning" />
              <Example color="danger" text="Danger" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Button Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Split button dropdown
class ButtonDropDownExample3 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <ExampleSplit color="primary" text="Primary" />
              <ExampleSplit color="secondary" text="Secondary" />
              <ExampleSplit color="success" text="Success" />
              <ExampleSplit color="info" text="Info" />
              <ExampleSplit color="warning" text="Warning" />
              <ExampleSplit color="danger" text="Danger" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
              <Button id="caret" color="primary">{this.props.text}</Button>
              <DropdownToggle caret color="primary" />
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// sizing
class ButtonDropDownExample4 extends React.Component
{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <ButtonDropdown isOpen={this.state.btnLg} toggle={() => { this.setState({ btnLg: !this.state.btnLg }); }}>
                <DropdownToggle caret size="lg">
                  Large Button
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <div className="mt-1">
              <ButtonDropdown isOpen={this.state.btnSm} toggle={() => { this.setState({ btnSm: !this.state.btnSm }); }}>
                <DropdownToggle caret size="sm">
                  Small Button
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
              <DropdownToggle caret size="lg">
                Large Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
              </ButtonDropdown>

              <ButtonDropdown isOpen={isOpen} toggle={toggle}>
              <DropdownToggle caret size="sm">
                Small Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

//Uncontrolled Dropdown
class ButtonDropDownExample5 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonUncontroledExample />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            import React from 'react';
            import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
            export default function Example () => {
              return (
                <UncontrolledButtonDropdown>
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              );
            }
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

//Drop direction variations
class ButtonDropDownExample6 extends React.Component
{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      btnDropright: false,
      btnDropleft: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      btnDropright: !this.state.btnDropright,
      btnDropleft: !this.state.btnDropleft
    });
  }

  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
            <ButtonDropdown direction="up" isOpen={this.state.isOpen} toggle={() => { this.setState({ isOpen: !this.state.isOpen }); }}>
              <DropdownToggle caret>
                Dropup
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
              <DropdownToggle caret>
                Dropleft
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
              <DropdownToggle caret>
                Dropright
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
              <ButtonDropdown direction="up" isOpen={isOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Dropup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                <DropdownToggle caret>
                  Dropleft
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                <DropdownToggle caret>
                  Dropright
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color={this.props.color} caret>
          {this.props.text}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

class ExampleSplit extends React.Component
{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <Button id="caret" color={this.props.color}>{this.props.text}</Button>
        <DropdownToggle split color={this.props.color} />
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

class ButtonDropDownBaseExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

class ButtonUncontroledExample extends React.Component {
	render() {
		return (
			<UncontrolledButtonDropdown>
				<DropdownToggle caret>
					Dropdown
      			</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</UncontrolledButtonDropdown>
		);
	}
}

// example
class ButtonGroupExample1 extends React.Component
{
    render() {
      return (
        <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
          <Row>
            <Col lg="12" md="12" xs="12">
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" xs="12">
              <ReactCodeBlock react={`
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              `}
              />
            </Col>
          </Row>
        </Container>
  );}
}

class ButtonGroupExample1Properties extends React.Component
{
    render() {
      return (
        <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
          <Row>
            <Col lg="12" md="12" xs="12">
              <ReactCodeBlock react={`
                ButtonGroup.propTypes = {
                  ariaLabel: PropTypes.string,
                  className: PropTypes.string,
                  role: PropTypes.string,
                  size: PropTypes.string,
                  vertical: PropTypes.bool
                };
              `}
              />
            </Col>
          </Row>
        </Container>
  );}
}

// button toolbar
class ButtonGroupExample2 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <ReactCodeBlock react={`
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  };
};

// Sizing
class ButtonGroupExample3 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup  size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup  size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// nesting
class ButtonGroupExample4 extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// vertical
class ButtonGroupExample5 extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <ButtonGroup vertical>
            <Button>1</Button>
            <Button>2</Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ReactCodeBlock react={`
            <ButtonGroup vertical>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class CarouselExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return(
      <Container>
        <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</p>
        <p>Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      <Row>
        <Col lg="12" md="12" xs="12">
          <ReactCodeBlock react={`
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+1',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+2',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/1000x400text=Slide+1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;
        `} />
      </Col>
    </Row>
    </Container>
    );
  }
}

class CollapseExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <p>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from it’s current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.</p>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle Collapse</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <p>This is an example of some collapsible content.</p>
            </CardBody>
          </Card>
        </Collapse>
        <ReactCodeBlock react={`
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>This is an example of some collapsible content.</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
        `} />
      </Container>
    );
  }
}

// class JumbotronExample1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }
//   render() {
//     return(
//       <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
//       <p>A flexible component that can optionally extend the entire viewport to showcase important messages on your site.</p>
//         <Jumbotron>
//           <h1 className="display-3">Jumbotron Title</h1>
//           <p className="lead">This is the subheading on this Jumbotron.</p>
//           <hr className="my-2" />
//           <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
//           <p className="lead">
//             <Button color="primary">Learn More</Button>
//           </p>
//         </Jumbotron>
//         <ReactCodeBlock react={`
// <Jumbotron>
//   <h1 className="display-3">Jumbotron Title</h1>
//   <p className="lead">This is the subheading on this Jumbotron.</p>
//   <hr className="my-2" />
//   <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
//   <p className="lead">
//     <Button color="primary">Learn More</Button>
//   </p>
// </Jumbotron>
//         `} />
//       </Container>
//     );
//   }
// }

// class JumbotronExample2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }
//   render() {
//     return(
//       <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
//       <p>Jumbotrons can be made full width by adding the "jumbotron-fluid" class to the jumbotron element and placing all content in a div of class "container".</p>
//         <Jumbotron fluid>
//           <Container fluid>
//             <h1 className="display-3">Jumbotron Title</h1>
//             <p className="lead">This is the subheading on this Jumbotron.</p>
//             <hr className="my-2" />
//             <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
//             <p className="lead">
//               <Button color="primary">Learn More</Button>
//             </p>
//           </Container>
//         </Jumbotron>
//         <ReactCodeBlock react={`
// <Jumbotron fluid>
//   <Container fluid>
//     <h1 className="display-3">Jumbotron Title</h1>
//     <p className="lead">This is the subheading on this Jumbotron.</p>
//     <hr className="my-2" />
//     <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
//     <p className="lead">
//       <Button color="primary">Learn More</Button>
//     </p>
//   </Container>
// </Jumbotron>
//         `} />
//       </Container>
//     );
//   }
// }

class InputGroupExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder="username" />
          <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input placeholder="Amount" type="number" step="1" />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
        <ReactCodeBlock react={`
<InputGroup>
  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
  <Input placeholder="username" />
</InputGroup>
<br />
<InputGroup>
  <Input placeholder="username" />
  <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
</InputGroup>
<br />
<InputGroup>
  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
  <Input placeholder="Amount" type="number" step="1" />
  <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
        `} />
      </Container>
    );
  }
}

class InputGroupExample2 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">Large</InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Normal</InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup size="sm">
          <InputGroupAddon addonType="prepend">Small</InputGroupAddon>
          <Input />
        </InputGroup>
        <ReactCodeBlock react={`
<InputGroup size="lg">
  <InputGroupAddon addonType="prepend">Large</InputGroupAddon>
  <Input />
</InputGroup>
<br />
<InputGroup>
  <InputGroupAddon addonType="prepend">Normal</InputGroupAddon>
  <Input />
</InputGroup>
<br />
<InputGroup size="sm">
  <InputGroupAddon addonType="prepend">Small</InputGroupAddon>
  <Input />
</InputGroup>
        `} />
      </Container>
    );
  }
}

class InputGroupExample3 extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <ReactCodeBlock react={`
<InputGroup>
  <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
  <Input />
</InputGroup>
<br />
<InputGroup>
<Input />
  <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </InputGroupButtonDropdown>
</InputGroup>
        `} />
      </Container>
    );
  }
}

class ListGroupExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>Item 3</ListGroupItem>
          <ListGroupItem>Item 4</ListGroupItem>
        </ListGroup>
        <ReactCodeBlock react={`
<ListGroup>
  <ListGroupItem>Item 1</ListGroupItem>
  <ListGroupItem>Item 2</ListGroupItem>
  <ListGroupItem>Item 3</ListGroupItem>
  <ListGroupItem>Item 4</ListGroupItem>
</ListGroup>
        `} />
      </Container>
    );
  }
}

class ListGroupExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem active>Item 2 (Active)</ListGroupItem>
          <ListGroupItem >Item 3</ListGroupItem>
          <ListGroupItem>Item 4</ListGroupItem>
        </ListGroup>
        <ReactCodeBlock react={`
<ListGroup>
  <ListGroupItem>Item 1</ListGroupItem>
  <ListGroupItem active>Item 2 (Active)</ListGroupItem>
  <ListGroupItem >Item 3</ListGroupItem>
  <ListGroupItem>Item 4</ListGroupItem>
</ListGroup>
        `} />
      </Container>
    );
  }
}

class ListGroupExample3 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <ListGroup>
          <ListGroupItem tag="a" href="#" action>Item 1</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Item 2</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Item 3</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Item 4</ListGroupItem>
        </ListGroup>
        <ReactCodeBlock react={`
<ListGroup>
  <ListGroupItem tag="a" href="#" action>Item 1</ListGroupItem>
  <ListGroupItem tag="a" href="#" action>Item 2</ListGroupItem>
  <ListGroupItem tag="a" href="#" action>Item 3</ListGroupItem>
  <ListGroupItem tag="a" href="#" action>Item 4</ListGroupItem>
</ListGroup>
        `} />
      </Container>
    );
  }
}

class NavExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <ReactCodeBlock react={`
<Nav>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Another Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled Link</NavLink>
  </NavItem>
</Nav>
        `} />
      </Container>
    );
  }
}

class NavExample2 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled</NavLink>
          </NavItem>
        </Nav>
        <ReactCodeBlock react={`
<Nav tabs>
  <NavItem>
    <NavLink href="#" active>Active</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled</NavLink>
  </NavItem>
</Nav>
        `} />
      </Container>
    );
  }
}

class NavExample3 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Nav vertical>
          <NavItem>
            <NavLink href="#" active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled</NavLink>
          </NavItem>
        </Nav>
        <ReactCodeBlock react={`
<Nav vertical>
  <NavItem>
    <NavLink href="#" active>Active</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled</NavLink>
  </NavItem>
</Nav>
        `} />
      </Container>
    );
  }
}

class NavBarExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Action
                  </DropdownItem>
                  <DropdownItem>
                    Another action
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>  
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ReactCodeBlock react={`
<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Navbar</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Action
          </DropdownItem>
          <DropdownItem>
            Another action
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>  
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
        `} />
      </Container>
    );
  }
}

// class ModalExample1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }
//   render() {
//     return(
//       <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
//         <Button color="danger" onClick={this.toggle}>Click here to launch the modal</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Modal body content.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         <ReactCodeBlock react={`
// <Button color="danger" onClick={this.toggle}>Click here to launch the modal</Button>
// <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//   <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//   <ModalBody>
//     Modal body content.
//   </ModalBody>
//   <ModalFooter>
//     <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//   </ModalFooter>
// </Modal>
//         `} />
//       </Container>
//     );
//   }
// }

export { 
  AlertExample1,
  AlertExample2,
  AlertExample3,
  FadeExample1,
  JumbotronExample,
  TabsExample,
  MediaExample,
  // NavBarExample,
  BadgeExample1,
  BadgeExample2,
  BadgeExample3,
  BreadcrumbExample1,
  CardExample1,
  CardExample2,
  CardExample3,
  CardExample4,
  FormExample1,
  LayoutExample1,
  TableExample1,
  TableExample2,
  TableExample3,
  TableExample4,
  TableExample5,
  TableExample6,
  TableExample7,
  TableExample8,
  Dropdown1,
  Dropdown2,
  Dropdown3,
  Progress1,
  Progress2,
  Progress3,
  Progress4,
  Progress5,
  Pagination1,
  Pagination2,
  Pagination3,
  Pagination4,
  Modal1,
  Modal2,
  TooltipExample1,
  TooltipExample2,
  TooltipExample3,
  TooltipExample4,
  TooltipExample5,
  PopoversExample1,
  PopoversExample2,
  PopoversExample3,
  ButtonExample1,
  ButtonExample1Properties,
  ButtonExample2,
  ButtonExample3,
  ButtonExample4,
  ButtonExample5,
  ButtonExample6,
  ButtonExample7,
  ButtonExample8,
  ButtonExample9,
  ButtonDropDownExample1, 
  ButtonDropDownExample1Properties, 
  ButtonDropDownExample2, 
  ButtonDropDownExample3, 
  ButtonDropDownExample4, 
  ButtonDropDownExample5, 
  ButtonDropDownExample6,
  ButtonGroupExample1, ButtonGroupExample1Properties, ButtonGroupExample2,
  ButtonGroupExample3, ButtonGroupExample4, ButtonGroupExample5,
  CarouselExample1,
  CollapseExample1,
  // JumbotronExample1,
  // JumbotronExample2,
  InputGroupExample1,
  InputGroupExample2,
  InputGroupExample3,
  ListGroupExample1,
  ListGroupExample2,
  ListGroupExample3,
  NavExample1,
  NavExample2,
  NavExample3,
  NavBarExample1,
  // ModalExample1

};