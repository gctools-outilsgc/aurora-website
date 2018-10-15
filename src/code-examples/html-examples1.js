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


  export { 
    Dropdown1,
    Dropdown2,
    Dropdown3
  };
