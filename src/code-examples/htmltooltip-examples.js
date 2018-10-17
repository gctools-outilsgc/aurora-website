import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

class TooltipExample1 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}


class TooltipExample2 extends React.Component
{
  render(){
    return(
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
          Tooltip on right
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
          Tooltip on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
          Tooltip on left
        </button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              Tooltip on right
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
              Tooltip on left
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample3 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
              Tooltip with HTML
            </button>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample4 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').tooltip(options)
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample5 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#example').tooltip({ boundary: 'window' })
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample6 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <!-- HTML to write -->
            <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

            <!-- Generated markup by the plugin -->
            <div class="tooltip bs-tooltip-top" role="tooltip">
              <div class="arrow"></div>
              <div class="tooltip-inner">
                Some tooltip text!
              </div>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample7 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
        <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
          <button class="btn btn-primary" style={{pointerEvents_events: 'none'}} type="button" disabled>Disabled button</button>
        </span>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
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

class TooltipExample8 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('show')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample9 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('hide')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample10 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('toggle')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample11 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('dispose')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample12 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('enable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample13 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('disable')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample14 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('toggleEnabled')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample15 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#element').tooltip('update')
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  }
}

class TooltipExample16 extends React.Component
{
  render(){
    return(
    <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            $('#myTooltip').on('hidden.bs.tooltip', function () {
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
  TooltipExample1,
  TooltipExample2,
  TooltipExample3,
  TooltipExample4,
  TooltipExample5,
  TooltipExample6,
  TooltipExample7,
  TooltipExample8,
  TooltipExample9,
  TooltipExample10,
  TooltipExample11,
  TooltipExample12,
  TooltipExample13,
  TooltipExample14,
  TooltipExample15,
  TooltipExample16
}