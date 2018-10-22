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
  ModalFooter,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink,
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
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

/* Addison */
class FormExample1 extends React.Component {
  render() {
    return(
      <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="exampleSelect1">Example select</label>
                <select class="form-control" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleSelect2">Example multiple select</label>
                <select multiple class="form-control" id="exampleSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleTextarea">Example textarea</label>
                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
              </div>
              <fieldset class="form-group">
                <legend>Radio buttons</legend>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>
                <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>
                <div class="form-check disabled">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                    Option three is disabled
                  </label>
                </div>
              </fieldset>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" />
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleSelect1">Example select</label>
    <select class="form-control" id="exampleSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleTextarea">Example textarea</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
  </div>
  <fieldset class="form-group">
    <legend>Radio buttons</legend>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that&mdash;be sure to include why it's great
      </label>
    </div>
    <div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two can be something else and selecting it will deselect option one
      </label>
    </div>
    <div class="form-check disabled">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </div>
  </fieldset>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            `} />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Beatrice

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
            <HtmlCodeBlock html={`
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
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
              <HtmlCodeBlock html={`
  <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  This dropdown's menu is right-aligned
  </button>
  <div class="dropdown-menu dropdown-menu-right">
      <button class="dropdown-item" type="button">Action</button>
      <button class="dropdown-item" type="button">Another action</button>
      <button class="dropdown-item" type="button">Something else here</button>
  </div>
  </div>
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
              <HtmlCodeBlock html={`
  <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Large button
      </button>
      <div class="dropdown-menu">
      ...
      </div>
  </div>
  <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      ...
      </div>
  </div>
  <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Small button
      </button>
      <div class="dropdown-menu">
      ...
      </div>
  </div>
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
          </div>
              <HtmlCodeBlock html={`
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
              <Progress style={{marginBottom: "5px"}} color="success" value="25" />
              <Progress style={{marginBottom: "5px"}} color="info" value={50} />
              <Progress style={{marginBottom: "5px"}} color="warning" value={75} />
              <Progress color="danger" value="100" />
          </div>
              <HtmlCodeBlock html={`
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
          </div>
              <HtmlCodeBlock html={`
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
              `} />
      </Container>
      );
  }
}

class Progress4 extends React.Component {
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
          <div>
              <Progress style={{marginBottom: "5px"}} striped value={2 * 5} />
              <Progress style={{marginBottom: "5px"}} striped color="success" value="25" />
              <Progress style={{marginBottom: "5px"}} striped color="info" value={50} />
              <Progress style={{marginBottom: "5px"}} striped color="warning" value={75} />
              <Progress style={{marginBottom: "5px"}} striped color="danger" value="100" />
          </div>
              <HtmlCodeBlock html={`
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>  
              `} />
      </Container>
      );
  }
}

class Progress5 extends React.Component {
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
          <div>
              <Progress style={{marginBottom: "5px"}} animated value={75} />
          </div>
              <HtmlCodeBlock html={`
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
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
                  <PaginationLink next href="#" />
              </PaginationItem>
          </Pagination>
              <HtmlCodeBlock html={`
<nav aria-label="Page navigation example">
  <ul class="pagination">
      <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
          </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
          </a>
      </li>
  </ul>
</nav>
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
                  <PaginationLink href="#">
                      Previous
                  </PaginationLink>
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
                      Next
                  </PaginationLink>
              </PaginationItem>
          </Pagination>
              <HtmlCodeBlock html={`
<nav aria-label="...">
  <ul class="pagination">
      <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
          <a class="page-link" href="#">Next</a>
      </li>
  </ul>
</nav>
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
              <HtmlCodeBlock html={`
<nav aria-label="...">
  <ul class="pagination pagination-lg">
      <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
          <a class="page-link" href="#">Next</a>
      </li>
  </ul>
</nav>
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
              <HtmlCodeBlock html={`
<nav aria-label="...">
  <ul class="pagination">
      <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
          <a class="page-link" href="#">Next</a>
      </li>
  </ul>
</nav>
              `} />
      </Container>
      );
  }
}

// Gauillaume

// basic
class ButtonGroupExample1 extends React.Component
{
    render() {
      return (
        <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
          <Row>
            <Col lg="12" md="12" xs="12">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" xs="12">
              <HtmlCodeBlock html={`
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
              </div>
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
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary">8</button>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-secondary">8</button>
              </div>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  };
};

// button toolbar 2
class ButtonGroupExample3 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon2">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon2">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Sizing
class ButtonGroupExample4 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group" role="group" aria-label="Default button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group" role="group" aria-label="Default button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// nesting
class ButtonGroupExample5 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-secondary">1</button>
              <button type="button" class="btn btn-secondary">2</button>

              <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>

                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                  </div>
                </div>
              </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// vertical
class ButtonGroupExample6 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

class ButtonGroupExample7 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop3" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop4" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
              <div class="btn-group-vertical">
              ...
              </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class ButtonDropdownExample1 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class ButtonDropdownExample2 extends React.Component{
  render()
  {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="dropdown show">
              <a class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class ButtonDropdownExample3 extends React.Component{
  render (){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            {/* Example single danger button */}
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <!-- Example single danger button -->
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class ButtonDropdownExample4 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            {/* Example split danger button */}
            <div class="btn-group">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group">
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <!-- Example split danger button -->
            <div class="btn-group">
              <button type="button" class="btn btn-danger">Action</button>
              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//Sizing
class ButtonDropdownExample5 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div class="btn-toolbar" role="toolbar">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group ml-2">
              <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
              <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
          <div class="btn-toolbar" role="toolbar">
            <div class="btn-group">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Small button
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* /btn-group */}
            <div class="btn-group ml-2">
              <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
              <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <!-- Large button groups (default and split) -->
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
                ...
              </div>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                ...
              </div>
            </div>

            <!-- Small button groups (default and split) -->
            <div class="btn-group">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Small button
              </button>
              <div class="dropdown-menu">
                ...
              </div>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Small button
              </button>
              <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                ...
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

// Dropup variation
class ButtonDropdownExample6 extends React.Component
{
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group dropup">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropup
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <div class="btn-group dropup">
              <button type="button" class="btn btn-secondary">
                Split dropup
              </button>
              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <!-- Default dropup button -->
            <div class="btn-group dropup">
              <button type="button" class="btn btn-secondary">Dropup</button>
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <!-- Dropdown menu links -->
              </div>
            </div>

            <!-- Split dropup button -->
            <div class="btn-group dropup">
              <button type="button" class="btn btn-secondary">
                Split dropup
              </button>
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <!-- Dropdown menu links -->
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class TableExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//EXAMPLE - INVERSE
class TableExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//TABLE HEAD OPTIONS
class TableExample3 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>

            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//STRIPED ROWS
class TableExample4 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//STRIPED ROWS - DARK
class TableExample5 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERED TABLE
class TableExample6 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERED TABLE - DARK
class TableExample7 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-bordered table-inverse">
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
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERLESS TABLE
class TableExample8 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERLESS TABLE - DARK
class TableExample9 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-borderless table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th«>
                  <th scope="col">Handle</th>
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//HOVERABLE ROWS
class TableExample10 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//HOVERABLE ROWS - DARK
class TableExample11 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//SMALL TABLE
class TableExample12 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//SMALL TABLE - DARK
class TableExample13 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CONTEXTUAL - CLASSES EXAMPLE
class TableExample14 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <th scope="row">Active</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>

              
              <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- Rows -->
            <tr class="table-active">...</tr>

            <tr class="table-primary">...</tr>
            <tr class="table-secondary">...</tr>
            <tr class="table-success">...</tr>
            <tr class="table-danger">...</tr>
            <tr class="table-warning">...</tr>
            <tr class="table-info">...</tr>
            <tr class="table-light">...</tr>
            <tr class="table-dark">...</tr>

            <!-- Cells TD or TH -->
            <tr>
              <td class="table-active">...</td>
              
              <td class="table-primary">...</td>
              <td class="table-secondary">...</td>
              <td class="table-success">...</td>
              <td class="table-danger">...</td>
              <td class="table-warning">...</td>
              <td class="table-info">...</td>
              <td class="table-light">...</td>
              <td class="table-dark">...</td>
            </tr>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CONTEXTUAL - CLASSES EXAMPLE - DARK
class TableExample15 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary">
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-success">
                <th scope="row">3</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-info">
                <th scope="row">5</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-warning">
                <th scope="row">7</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-danger">
                <th scope="row">9</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- Rows -->
            <tr class="bg-primary">...</tr>
            <tr class="bg-success">...</tr>
            <tr class="bg-warning">...</tr>
            <tr class="bg-danger">...</tr>
            <tr class="bg-info">...</tr>

            <!-- Cells TD or TH -->
            <tr>
              <td class="bg-primary">...</td>
              <td class="bg-success">...</td>
              <td class="bg-warning">...</td>
              <td class="bg-danger">...</td>
              <td class="bg-info">...</td>
            </tr>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CAPTIONS
class TableExample16 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <caption>List of users</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//ALWAYS RESPONSIVE
class TableExample17 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - SMALL
class TableExample18 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-sm">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-sm">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - MEDIUM
class TableExample19 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-md">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-md">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - XLARGE
class TableExample20 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-xl">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-xl">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
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
      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <button type="button" class="btn btn-primary">Primary</button>

      {/* Secondary, outline button */}
      <button type="button" class="btn btn-secondary">Secondary</button>

      {/* Indicates a successful or positive action */}
      <button type="button" class="btn btn-success">Success</button>

      {/* Contextual button for informational alert messages */}
      <button type="button" class="btn btn-info">Info</button>

      {/* Indicates caution should be taken with this action */}
      <button type="button" class="btn btn-warning">Warning</button>

      {/* Indicates a dangerous or potentially negative action */}
      <button type="button" class="btn btn-danger">Danger</button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <button type="button" class="btn btn-link">Link</button>
      </Col>
    </Row>
    <Row>
      <Col lg="12" md="12" xs="12">
        <HtmlCodeBlock html={`
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Secondary, outline button -->
<button type="button" class="btn btn-secondary">Secondary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
        `}
        />
      </Col>
    </Row>
  </Container>
);}
}

// tags
class ButtonExample2 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <a className="btn btn-primary" href="/#" role="button">Link</a>
            <button className="btn btn-primary" type="submit">Button</button>
            <input className="btn btn-primary" type="button" value="Input" />
            <input className="btn btn-primary" type="submit" value="Submit" />
            <input className="btn btn-primary" type="reset" value="Reset" />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <a class="btn btn-primary" href="#" role="button">Link</a>
            <button class="btn btn-primary" type="submit">Button</button>
            <input class="btn btn-primary" type="button" value="Input" />
            <input class="btn btn-primary" type="submit" value="Submit" />
            <input class="btn btn-primary" type="reset" value="Reset" />
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// outline
class ButtonExample3 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - large
class ButtonExample4 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            <button type="button" class="btn btn-secondary btn-lg">Large button</button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            <button type="button" class="btn btn-secondary btn-lg">Large button</button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - small
class ButtonExample5 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
            <button type="button" class="btn btn-secondary btn-sm">Small button</button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
            <button type="button" class="btn btn-secondary btn-sm">Small button</button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// size - large-block
class ButtonExample6 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// active state
class ButtonExample7 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
            <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
            <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// disabled
class ButtonExample8 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
            <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
            <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// disabled - link
class ButtonExample9 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <a href="/#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
            <a href="/#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <a href="/#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
            <a href="/#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// single toggle
class ButtonExample10 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
              Single toggle
            </button>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
              Single toggle
            </button>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// checkbox
class ButtonExample11 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="checkbox" checked autoComplete="off" /> Checkbox 1 (pre-checked)
              </label>
              <label className="btn btn-primary">
                <input type="checkbox" autoComplete="off" /> Checkbox 2
              </label>
              <label className="btn btn-primary">
                <input type="checkbox" autoComplete="off" /> Checkbox 3
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="checkbox" checked autoComplete="off" /> Checkbox 1 (pre-checked)
              </label>
              <label className="btn btn-primary">
                <input type="checkbox" autoComplete="off" /> Checkbox 2
              </label>
              <label className="btn btn-primary">
                <input type="checkbox" autoComplete="off" /> Checkbox 3
              </label>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// radio
class ButtonExample12 extends React.Component
{
  render(){
  return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="radio" name="options" id="option1" autoComplete="off" checked /> Radio 1 (preselected)
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Radio 2
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option3" autoComplete="off" /> Radio 3
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="radio" name="options" id="option1" autoComplete="off" checked /> Radio 1 (preselected)
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Radio 2
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option3" autoComplete="off" /> Radio 3
              </label>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class MediaExample1 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="media">
              <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <img class="mr-3" src="./64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

// nesting
class MediaExample2 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="media">
              <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                <div class="media mt-3">
                  <a class="pr-3" href="#">
                    <img src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                  </a>
                  <div class="media-body">
                    <h5 class="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <img class="mr-3" src=".../64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                <div class="media mt-3">
                  <a class="pr-3" href="#">
                    <img src=".../64x64" alt="Generic placeholder image" />
                  </a>
                  <div class="media-body">
                    <h5 class="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//alignement - top
class MediaExample3 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="media">
              <img class="align-self-start mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Top-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <img class="align-self-start mr-3" src=".../64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Top-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//alignement - center
class MediaExample4 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div class="media">
            <img class="align-self-center mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
            <div class="media-body">
              <h5 class="mt-0">Center-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <img class="align-self-start mr-3" src=".../64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Top-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//alignement - bottom
class MediaExample5 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <div class="media">
            <img class="align-self-end mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
            <div class="media-body">
              <h5 class="mt-0">Bottom-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <img class="align-self-end mr-3" src=".../64x64" alt="Generic placeholder image" />
              <div class="media-body">
                <h5 class="mt-0">Bottom-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//order
class MediaExample6 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 mb-1">Media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              <img class="ml-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 mb-1">Media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              <img class="ml-3" src=".../64x64" alt="Generic placeholder image" />
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

//medialist
class MediaExample7 extends React.Component {
  render(){
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ul class="list-unstyled">
              <li class="media">
                <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </li>
              <li class="media my-4">
                <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </li>
              <li class="media">
                <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
              <ul class="list-unstyled">
                <li class="media">
                  <img class="mr-3" src=".../64x64" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
                <li class="media my-4">
                  <img class="mr-3" src=".../64x64" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
                <li class="media">
                  <img class="mr-3" src=".../64x64" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
              </ul>
            `}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class PopoversExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('[data-toggle="popover"]').popover()
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('.example-popover').popover({
                container: 'body'
              })
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample3 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
              <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

// four directions
class PopoversExample4 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on right
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on left
          </button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on top
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on right
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on bottom
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on left
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//dismiss on next click
class PopoversExample5 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//dismiss on next click - javascript
class PopoversExample6 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('.popover-dismiss').popover({
              trigger: 'focus'
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//disabled content
class PopoversExample7 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
            <button class="btn btn-primary" style={{pointerEvents:"none"}} type="button" disabled>Disabled button</button>
          </span>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
              <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
            </span>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//Usage
class PopoversExample8 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover(options)
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample9 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('show')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample10 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('hide')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample11 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('toggle')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample12 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('dispose')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample13 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('enable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample14 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('disable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample15 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('toggleEnabled')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample16 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('update')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}


//Events
class PopoversExample17 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#myPopover').on('hidden.bs.popover', function () {
              // do something…
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}


class TooltipExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
          Tooltip on right
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
          Tooltip on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
          Tooltip on left
        </button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              Tooltip on right
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
              Tooltip on left
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample3 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
              Tooltip with HTML
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample4 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').tooltip(options)
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample5 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').tooltip({ boundary: 'window' })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample6 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- HTML to write -->
            <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

            <!-- Generated markup by the plugin -->
            <div class="tooltip bs-tooltip-top" role="tooltip">
              <div class="arrow"></div>
              <div class="tooltip-inner">
                Some tooltip text!
              </div>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample7 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
        <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
          <button class="btn btn-primary" style={{pointerEvents_events: 'none'}} type="button" disabled>Disabled button</button>
        </span>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
              <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
            </span>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample8 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('show')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample9 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('hide')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample10 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('toggle')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample11 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('dispose')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample12 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('enable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample13 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('disable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample14 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('toggleEnabled')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample15 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('update')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample16 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#myTooltip').on('hidden.bs.tooltip', function () {
              // do something…
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
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
  ModalExample1,

  FormExample1,

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

  ButtonGroupExample1, 
  ButtonGroupExample2, 
  ButtonGroupExample3, 
  ButtonGroupExample4, 
  ButtonGroupExample5, 
  ButtonGroupExample6,
  ButtonGroupExample7,

  ButtonDropdownExample1, 
  ButtonDropdownExample2, 
  ButtonDropdownExample3,
  ButtonDropdownExample4, 
  ButtonDropdownExample5, 
  ButtonDropdownExample6,

  TableExample1,
  TableExample2,
  TableExample3,
  TableExample4,
  TableExample5,
  TableExample6,
  TableExample7,
  TableExample8,
  TableExample9,
  TableExample10,
  TableExample11,
  TableExample12,
  TableExample13,
  TableExample14,
  TableExample15,
  TableExample16,
  TableExample17,
  TableExample18,
  TableExample19,
  TableExample20,

  ButtonExample1,
  ButtonExample2,
  ButtonExample3,
  ButtonExample4,
  ButtonExample5,
  ButtonExample6,
  ButtonExample7,
  ButtonExample8,
  ButtonExample9,
  ButtonExample10,
  ButtonExample11,
  ButtonExample12,

  MediaExample1,
  MediaExample2,
  MediaExample3,
  MediaExample4,
  MediaExample5,
  MediaExample6,
  MediaExample7,

  PopoversExample1,
  PopoversExample2,
  PopoversExample3,
  PopoversExample4,
  PopoversExample5,
  PopoversExample6,
  PopoversExample7,
  PopoversExample8,
  PopoversExample9,
  PopoversExample10,
  PopoversExample11,
  PopoversExample12,
  PopoversExample13,
  PopoversExample14,
  PopoversExample15,
  PopoversExample16,
  PopoversExample17,

  TooltipExample1,
  TooltipExample2,
  TooltipExample3,
  TooltipExample4,
  TooltipExample5,
  TooltipExample6,
  TooltipExample7,
  TooltipExample8,
  TooltipExample9,
  TooltipExample10,
  TooltipExample11,
  TooltipExample12,
  TooltipExample13,
  TooltipExample14,
  TooltipExample15,
  TooltipExample16,
};