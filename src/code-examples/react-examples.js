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
  FormExample1,
  LayoutExample1
};