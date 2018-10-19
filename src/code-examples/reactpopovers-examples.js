import React from 'react';
import { Container, Row, Col, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';

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

export {
  PopoversExample1,
  PopoversExample2,
  PopoversExample3
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