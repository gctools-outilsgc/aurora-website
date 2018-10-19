import React from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown, Row, Col, Container } from 'reactstrap'; // change to aurora import
import ReactCodeBlock from '../components/ReactCodeBlock';

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

export { ButtonDropDownExample1, ButtonDropDownExample1Properties, ButtonDropDownExample2, ButtonDropDownExample3, ButtonDropDownExample4, ButtonDropDownExample5, ButtonDropDownExample6 }