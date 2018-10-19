import React from 'react';
import { Tooltip, UncontrolledTooltip, Button, Container, Row, Col } from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';

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

export {
  TooltipExample1,
  TooltipExample2,
  TooltipExample3,
  TooltipExample4,
  TooltipExample5
}