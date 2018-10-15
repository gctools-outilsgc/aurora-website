import React from 'react';
import {
  Alert,
  Container, 
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

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
    <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            ...
        </DropdownMenu>
    </Dropdown>
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            ...
        </DropdownMenu>
    </Dropdown>
    <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            ...
        </DropdownMenu>
    </Dropdown>
                `} />
        </Container>
        );
    }
}


  export { 
    Dropdown1,
    Dropdown2,
    Dropdown3
  };