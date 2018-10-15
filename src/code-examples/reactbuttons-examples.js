import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

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
        <HtmlCodeBlock html={`
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
            <HtmlCodeBlock html={`
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
class ButtonExample4 extends React.Component
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
            <HtmlCodeBlock html={`
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
class ButtonExample5 extends React.Component
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
            <HtmlCodeBlock html={`
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
class ButtonExample6 extends React.Component
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
            <HtmlCodeBlock html={`
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
class ButtonExample7 extends React.Component
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
            <HtmlCodeBlock html={`
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

export {
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
  ButtonExample12
}