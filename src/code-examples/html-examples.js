import React from 'react';
import {
  Alert,
  Container, 
  Row, 
  Col
} from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

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
  CardExample4
};