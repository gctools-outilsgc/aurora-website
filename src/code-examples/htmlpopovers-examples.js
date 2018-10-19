import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';


// EXAMPLE
class PopoversExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('[data-toggle="popover"]').popover()
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('.example-popover').popover({
                container: 'body'
              })
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample3 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
              <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

// four directions
class PopoversExample4 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on right
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on left
          </button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on top
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on right
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on bottom
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Popover on left
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//dismiss on next click
class PopoversExample5 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//dismiss on next click - javascript
class PopoversExample6 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('.popover-dismiss').popover({
              trigger: 'focus'
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//disabled content
class PopoversExample7 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
            <button class="btn btn-primary" style={{pointerEvents:"none"}} type="button" disabled>Disabled button</button>
          </span>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
              <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
            </span>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

//Usage
class PopoversExample8 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover(options)
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample9 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('show')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample10 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('hide')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample11 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('toggle')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample12 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('dispose')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample13 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('enable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample14 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('disable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample15 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('toggleEnabled')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class PopoversExample16 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').popover('update')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}


//Events
class PopoversExample17 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#myPopover').on('hidden.bs.popover', function () {
              // do something…
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

export {
  PopoversExample1,
  PopoversExample2,
  PopoversExample3,
  PopoversExample4,
  PopoversExample5,
  PopoversExample6,
  PopoversExample7,
  PopoversExample8,
  PopoversExample9,
  PopoversExample10,
  PopoversExample11,
  PopoversExample12,
  PopoversExample13,
  PopoversExample14,
  PopoversExample15,
  PopoversExample16,
  PopoversExample17
}