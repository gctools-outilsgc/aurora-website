import React from 'react';
import {
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
  Button,
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
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

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

/** ALERTS */

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

/** BADGE */

class BadgeExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div>
              <h1>Example heading <span className="badge badge-secondary">New</span></h1>
              <h2>Example heading <span className="badge badge-secondary">New</span></h2>
              <h3>Example heading <span className="badge badge-secondary">New</span></h3>
              <h4>Example heading <span className="badge badge-secondary">New</span></h4>
              <h5>Example heading <span className="badge badge-secondary">New</span></h5>
              <h6>Example heading <span className="badge badge-secondary">New</span></h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
<h2>Example heading <span class="badge badge-secondary">New</span></h2>
<h3>Example heading <span class="badge badge-secondary">New</span></h3>
<h4>Example heading <span class="badge badge-secondary">New</span></h4>
<h5>Example heading <span class="badge badge-secondary">New</span></h5>
<h6>Example heading <span class="badge badge-secondary">New</span></h6>
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
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge badge-light">4</span>
            </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
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
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-danger">Danger</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-info">Info</span>
              <span className="badge badge-light">Light</span>
              <span className="badge badge-dark">Dark</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
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
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
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
            <div>
              <div className="card mb-2 d-inline-block" style={{maxWidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-subtitle text-muted">Meta Information</div>
                  <p className="card-text">Some quick example text to build on the card title</p>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div class="card-subtitle text-muted">Meta Information</div>
      <p class="card-text">Some quick example text to build on the card title</p>
      <a href="#" class="card-link">Another link</a>
  </div>
</div>
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
            <div className="card mb-2 d-inline-block" style={{maxWidth: "18rem"}}>
              <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className="card-subtitle text-muted">
                  Meta Information
                </div>
                <p className="card-text">Some quick example text to build on the card title</p>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
  <img class="card-img-top" src="image.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
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
            <div className="card mb-2 d-inline-block" style={{maxWidth: "18rem"}}>
              <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className="card-subtitle text-muted">Meta Information</div>
                <p className="card-text">Some quick example text to build on the card title</p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-outline-primary">Secondary</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
  <img class="card-img-top" src="image.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
  </div>
  <div class="card-footer">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Secondary</button>
  </div>
</div>
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
          <div className="card card-profile mb-2 d-inline-block" style={{maxWidth: "18rem"}}>  
            <img className="card-img-top" style={{height: "100px"}} src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg" />
            <div className="card-body">
              <img alt="..." class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow" />
              <div>
              <h5 className="card-title">Name or Group</h5>
              <p className="text-muted">Job title or meta information</p>
              <button type="button" className="btn btn-primary">Call to Action</button>
              </div>
            </div>
          </div>

          <div className="card mb-2 d-inline-block" style={{maxWidth: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="card-subtitle text-muted">Meta Information</div>
              <p className="card-text">Some quick example text to build on the card title. Here is some extra information, this could be something wonderful!</p>
              <button type="button" className="btn btn-light"><span className="fa fa-heart"></span><span className="sr-only">Like</span></button>
              <button type="button" className="btn btn-light"><span className="fa fa-comment"></span><span className="sr-only">Comment</span></button>
            </div>
          </div>

          <div className="card mb-2 d-inline-block" style={{maxWidth: "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="card-subtitle text-muted">Meta Information</div>
              <p className="card-text">Some quick example text to build on the card title</p>
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-outline-primary">Primary</button>
            </div>
            <div className="card-footer">Extra information</div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<div class="card card-profile mb-2 d-inline-block" style="max-width: 18rem;">  
  <img class="card-img-top" style="height: 100px;" src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg">
  <div class="card-body">
    <img alt="..." class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
    <div>
      <h5 class="card-title">Name or Group</h5>
      <p class="text-muted">Job title or meta information</p>
      <button type="button" class="btn btn-primary">Call to Action</button>
    </div>
  </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title. Here is some extra information, this could be something wonderful!</p>
    <button type="button" class="btn btn-light"><span class="fa fa-heart"></span><span class="sr-only">Like</span></button>
    <button type="button" class="btn btn-light"><span class="fa fa-comment"></span><span class="sr-only">Comment</span></button>
  </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Primary</button>
  </div>
  <div class="card-footer">Extra information</div>
</div>
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

/* Ryan components */

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
          <HtmlCodeBlock html={`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://via.placeholder.com/1000x400text=Slide+1" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://via.placeholder.com/1000x400text=Slide+2" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://via.placeholder.com/1000x400text=Slide+3" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
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
        <HtmlCodeBlock html={`
<p>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Toggle Collapse
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <p>This is an example of some collapsible content.</p>
  </div>
</div>
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
        <HtmlCodeBlock html={`
<div class="jumbotron">
  <h1 class="display-4">Jumbotron Title</h1>
  <p class="lead">This is the subheading on this Jumbotron.</p>
  <hr class="my-4">
  <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
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
        <HtmlCodeBlock html={`
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Jumbotron Title</h1>
    <p class="lead">This is the subheading on this Jumbotron.</p>
    <hr class="my-4">
    <p>Content for the Jumbotron can be placed down here underneat the subheading.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
</div>
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
        <HtmlCodeBlock html={`
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" placeholder="username" aria-label="username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="username" aria-label="username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" placeholder="Amount" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>

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
        <HtmlCodeBlock html={`
<div class="input-group input-group-lg">
<div class="input-group-prepend">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
</div>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
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
        <HtmlCodeBlock html={`
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">I'm a button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Another action</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>
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
        <HtmlCodeBlock html={`
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
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
        <HtmlCodeBlock html={`
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item active">Item 2 (Active)</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
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
        <HtmlCodeBlock html={`
<ul class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Item 1</a>
  <a href="#" class="list-group-item list-group-item-action">Item 2</a>
  <a href="#" class="list-group-item list-group-item-action">Item 3</a>
  <a href="#" class="list-group-item list-group-item-action">Item 4</a>
</ul>
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
        <HtmlCodeBlock html={`
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Another Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
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
        <HtmlCodeBlock html={`
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
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
        <HtmlCodeBlock html={`
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
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
        <HtmlCodeBlock html={`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
              </div>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
          </li>
      </ul>
  </div>
</nav>
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
        <HtmlCodeBlock html={`
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Modal body content.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Do something</button>
        <button type="button" class="btn btn-primary">Cancel</button>
      </div>
    </div>
  </div>
</div>
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
  CardExample1,
  CardExample2,
  CardExample3,
  CardExample4,
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