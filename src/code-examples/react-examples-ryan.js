import React from 'react';
import {
  Breadcrumb, 
  BreadcrumbItem,
  Button,
  Badge,
  Alert,
  Container, 
  Row, 
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Collapse,
  CardBody,
  Card,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';

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

class JumbotronExample1 extends React.Component {
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
      <p>A flexible component that can optionally extend the entire viewport to showcase important messages on your site.</p>
        <Jumbotron>
          <h1 className="display-3">Jumbotron Title</h1>
          <p className="lead">This is the subheading on this Jumbotron.</p>
          <hr className="my-2" />
          <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <ReactCodeBlock react={`
<Jumbotron>
  <h1 className="display-3">Jumbotron Title</h1>
  <p className="lead">This is the subheading on this Jumbotron.</p>
  <hr className="my-2" />
  <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
  <p className="lead">
    <Button color="primary">Learn More</Button>
  </p>
</Jumbotron>
        `} />
      </Container>
    );
  }
}

class JumbotronExample2 extends React.Component {
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
      <p>Jumbotrons can be made full width by adding the "jumbotron-fluid" class to the jumbotron element and placing all content in a div of class "container".</p>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Jumbotron Title</h1>
            <p className="lead">This is the subheading on this Jumbotron.</p>
            <hr className="my-2" />
            <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Container>
        </Jumbotron>
        <ReactCodeBlock react={`
<Jumbotron fluid>
  <Container fluid>
    <h1 className="display-3">Jumbotron Title</h1>
    <p className="lead">This is the subheading on this Jumbotron.</p>
    <hr className="my-2" />
    <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
    <p className="lead">
      <Button color="primary">Learn More</Button>
    </p>
  </Container>
</Jumbotron>
        `} />
      </Container>
    );
  }
}

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

class ModalExample1 extends React.Component {
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
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Button color="danger" onClick={this.toggle}>Click here to launch the modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Modal body content.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <ReactCodeBlock react={`
<Button color="danger" onClick={this.toggle}>Click here to launch the modal</Button>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
  <ModalBody>
    Modal body content.
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
        `} />
      </Container>
    );
  }
}

export { 
  AlertExample1,
  AlertExample2,
  AlertExample3,
  BadgeExample1,
  BadgeExample2,
  BadgeExample3,
  BreadcrumbExample1,
  CarouselExample1,
  CollapseExample1,
  JumbotronExample1,
  JumbotronExample2,
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
  ModalExample1
};