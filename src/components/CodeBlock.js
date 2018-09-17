import React from 'react';
import { Button, ButtonGroup, Row, Col, Container, Nav, NavItem, NavLink } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { I18n } from "react-i18next";

/** Component that holds code in html and react/jsx with the ability to copy the code */
class CodeBlock extends React.Component {
  /**
   * Take the inputs as well as initialize the needed state.
   * @param {props} { defaultOutput, html, react, isShowingCode } - The props not counting the i18n props
   */
  constructor(props) {
    super(props);

    this.state = {
      output: (this.props.defaultOutput === undefined || this.props.defaultOutput === "react") ? "react" : "html",
      isShowingCode: this.props.isShowingCode,
      copyText: "COPY CODE"
    }

    this.changeOutput = this.changeOutput.bind(this);
    this.copy = this.copy.bind(this);
  }

  /**
   * Change the value of the copy button once clicked via this.state.copyText.
   */
  copy() {
    this.setState({ copyText: "Copied!" });
  }

  /**
   * Change the output of the code box between the supplied values for html and react.
   * @param {string} value - "html" or "react"
   */
  changeOutput(value) {
    if (this.state.output !== value) {
      this.setState({ output: value });
      if (this.state.copyText === "Copied!") {
        this.setState({ copyText: "COPY CODE" });
      }
    }
  }

  /**
   * Render the codeblock as a bootstrap row (please let Addison know if this is not ideal).
   * @return {<jsx>} The component.
   */
  render() {
    return (
      <Container>
        <Row className="codeblock" style={(this.props.isShowingCode) ? { "display": "flex" } : { "display": "none" }}>
          <Col md="12">
            <Nav tabs>
              <NavItem>
                <NavLink
                href="#"
                onClick={() => this.changeOutput("react")}
                className={(!(this.state.output === "react")) ? "" : "active"}>
                  React
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                href="#"
                onClick={() => this.changeOutput("html")}
                className={(!(this.state.output === "html")) ? "" : "active"}>
                  HTML
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md="12" style={{ "width": "100%" }}>
            <CopyToClipboard text={(this.state.output === "html") ? this.props.html : this.props.react}>
              <Button style={{'position':'absolute', 'right':'20px', 'top':'12px'}} color="primary" size="sm" outline onClick={this.copy} className="float-right">
                <I18n>
                  {
                    (t) => (
                      t(this.state.copyText)
                    )
                  }
                </I18n>
              </Button>
            </CopyToClipboard>
            <pre style={{'padding-top':'40px'}}>
              <PrismCode className={(this.state.output === "html") ? "language-html" : "language-jsx"}>
                {(this.state.output === "html") ? this.props.html : this.props.react}
              </PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    );
  }
}


CodeBlock.propTypes = {
  defaultOutput: PropTypes.string,
  html: PropTypes.string,
  react: PropTypes.string,
  isShowingCode: PropTypes.bool
};

CodeBlock.defaultProps = {
  defaultOutput: "html",
  isShowingCode: true
}


export default CodeBlock;
