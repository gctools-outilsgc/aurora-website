import React from 'react';
import {
  Alert,
  Container, 
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink
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
                <div className="text-center">Multiple bars</div>
                <Progress multi>
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                    <Progress bar color="warning" value="20" />
                    <Progress bar color="danger" value="5" />
                </Progress>
            </div>
                <HtmlCodeBlock html={`
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
    <div className="text-center">Multiple bars</div>
    <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
    </Progress>
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
                <Progress style={{marginBottom: "5px"}} value={2 * 5} />
                <Progress style={{marginBottom: "5px"}} color="success" value="25" />
                <Progress style={{marginBottom: "5px"}} color="info" value={50} />
                <Progress style={{marginBottom: "5px"}} color="warning" value={75} />
                <Progress color="danger" value="100" />
            </div>
                <HtmlCodeBlock html={`
<div>
    <Progress value={2 * 5} />
    <Progress color="success" value="25" />
    <Progress color="info" value={50} />
    <Progress color="warning" value={75} />
    <Progress color="danger" value="100" />
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
                <Progress style={{marginBottom: "5px"}} value={50}>1/2</Progress>
                <Progress style={{marginBottom: "5px"}} value={75}>You're almost there!</Progress>
                <Progress style={{marginBottom: "5px"}} color="success" value="100">You did it!</Progress>
                <Progress multi>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="success" value="30">Wow!</Progress>
                    <Progress bar color="info" value="25">Cool</Progress>
                    <Progress bar color="warning" value="20">20%</Progress>
                    <Progress bar color="danger" value="5">!!</Progress>
                </Progress>
            </div>
                <HtmlCodeBlock html={`
<div>
    <Progress value="25">25%</Progress>
    <Progress value={50}>1/2</Progress>
    <Progress value={75}>You're almost there!</Progress>
    <Progress color="success" value="100">You did it!</Progress>
    <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="30">Wow!</Progress>
        <Progress bar color="info" value="25">Cool</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">!!</Progress>
    </Progress>
</div>
                `} />
        </Container>
        );
    }
}

class Progress4 extends React.Component {
    render() { 
        return(
        <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
            <div>
                <Progress style={{marginBottom: "5px"}} striped value={2 * 5} />
                <Progress style={{marginBottom: "5px"}} striped color="success" value="25" />
                <Progress style={{marginBottom: "5px"}} striped color="info" value={50} />
                <Progress style={{marginBottom: "5px"}} striped color="warning" value={75} />
                <Progress style={{marginBottom: "5px"}} striped color="danger" value="100" />
                <Progress multi>
                    <Progress striped bar value="10" />
                    <Progress striped bar color="success" value="30" />
                    <Progress striped bar color="warning" value="20" />
                    <Progress striped bar color="danger" value="20" />
                </Progress>
            </div>
                <HtmlCodeBlock html={`
<div>
    <Progress striped value={2 * 5} />
    <Progress striped color="success" value="25" />
    <Progress striped color="info" value={50} />
    <Progress striped color="warning" value={75} />
    <Progress striped color="danger" value="100" />
    <Progress multi>
        <Progress striped bar value="10" />
        <Progress striped bar color="success" value="30" />
        <Progress striped bar color="warning" value="20" />
        <Progress striped bar color="danger" value="20" />
    </Progress>
</div>
                `} />
        </Container>
        );
    }
}

class Progress5 extends React.Component {
    render() { 
        return(
        <Container style={{paddingLeft: "0px", paddingRight: "0px", marginTop: "15px", marginBottom: "15px"}} fluid>
            <div>
                <Progress style={{marginBottom: "5px"}} animated value={2 * 5} />
                <Progress style={{marginBottom: "5px"}} animated color="success" value="25" />
                <Progress style={{marginBottom: "5px"}} animated color="info" value={50} />
                <Progress style={{marginBottom: "5px"}} animated color="warning" value={75} />
                <Progress style={{marginBottom: "5px"}} animated color="danger" value="100" />
                <Progress multi>
                    <Progress animated bar value="10" />
                    <Progress animated bar color="success" value="30" />
                    <Progress animated bar color="warning" value="20" />
                    <Progress animated bar color="danger" value="20" />
                </Progress>
            </div>
                <HtmlCodeBlock html={`
<div>
    <Progress animated value={2 * 5} />
    <Progress animated color="success" value="25" />
    <Progress animated color="info" value={50} />
    <Progress animated color="warning" value={75} />
    <Progress animated color="danger" value="100" />
    <Progress multi>
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
    </Progress>
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
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
                <HtmlCodeBlock html={`
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
        <PaginationLink href="#">
            4
        </PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">
            5
        </PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink next href="#" />
    </PaginationItem>
</Pagination>
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
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
                <HtmlCodeBlock html={`
<Pagination aria-label="Page navigation example">
    <PaginationItem disabled>
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
        <PaginationLink href="#">
            4
        </PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">
            5
        </PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink next href="#" />
    </PaginationItem>
</Pagination>
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
                `} />
        </Container>
        );
    }
}


  export { 
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
    Pagination4
  };