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