import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';


// EXAMPLE
class TableExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//EXAMPLE - INVERSE
class TableExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//TABLE HEAD OPTIONS
class TableExample3 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//STRIPED ROWS
class TableExample4 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//STRIPED ROWS - DARK
class TableExample5 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERED TABLE
class TableExample6 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERED TABLE - DARK
class TableExample7 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-bordered table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERLESS TABLE
class TableExample8 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BORDERLESS TABLE - DARK
class TableExample9 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-borderless table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th«>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//HOVERABLE ROWS
class TableExample10 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//HOVERABLE ROWS - DARK
class TableExample11 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//SMALL TABLE
class TableExample12 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//SMALL TABLE - DARK
class TableExample13 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CONTEXTUAL - CLASSES EXAMPLE
class TableExample14 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <th scope="row">Active</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>

              
              <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- Rows -->
            <tr class="table-active">...</tr>

            <tr class="table-primary">...</tr>
            <tr class="table-secondary">...</tr>
            <tr class="table-success">...</tr>
            <tr class="table-danger">...</tr>
            <tr class="table-warning">...</tr>
            <tr class="table-info">...</tr>
            <tr class="table-light">...</tr>
            <tr class="table-dark">...</tr>

            <!-- Cells TD or TH -->
            <tr>
              <td class="table-active">...</td>
              
              <td class="table-primary">...</td>
              <td class="table-secondary">...</td>
              <td class="table-success">...</td>
              <td class="table-danger">...</td>
              <td class="table-warning">...</td>
              <td class="table-info">...</td>
              <td class="table-light">...</td>
              <td class="table-dark">...</td>
            </tr>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CONTEXTUAL - CLASSES EXAMPLE - DARK
class TableExample15 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary">
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-success">
                <th scope="row">3</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-info">
                <th scope="row">5</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-warning">
                <th scope="row">7</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="bg-danger">
                <th scope="row">9</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- Rows -->
            <tr class="bg-primary">...</tr>
            <tr class="bg-success">...</tr>
            <tr class="bg-warning">...</tr>
            <tr class="bg-danger">...</tr>
            <tr class="bg-info">...</tr>

            <!-- Cells TD or TH -->
            <tr>
              <td class="bg-primary">...</td>
              <td class="bg-success">...</td>
              <td class="bg-warning">...</td>
              <td class="bg-danger">...</td>
              <td class="bg-info">...</td>
            </tr>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//CAPTIONS
class TableExample16 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <table class="table">
            <caption>List of users</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <table class="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//ALWAYS RESPONSIVE
class TableExample17 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - SMALL
class TableExample18 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-sm">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-sm">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - MEDIUM
class TableExample19 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-md">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-md">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//BREAKPOINT SPECIFIC - XLARGE
class TableExample20 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <div class="table-responsive-xl">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="table-responsive-xl">
              <table class="table">
                ...
              </table>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}


export{
  TableExample1,
  TableExample2,
  TableExample3,
  TableExample4,
  TableExample5,
  TableExample6,
  TableExample7,
  TableExample8,
  TableExample9,
  TableExample10,
  TableExample11,
  TableExample12,
  TableExample13,
  TableExample14,
  TableExample15,
  TableExample16,
  TableExample17,
  TableExample18,
  TableExample19,
  TableExample20
}