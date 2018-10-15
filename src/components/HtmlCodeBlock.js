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
class HtmlCodeBlock extends React.Component {
  /**
   * Take the inputs as well as initialize the needed state.
   * @param {props} { defaultOutput, html, react, isShowingCode } - The props not counting the i18n props
   */
  constructor(props) {
    super(props);

    this.state = {
      copyText: "COPY CODE"
    }

    this.copy = this.copy.bind(this);
  }

  /**
   * Change the value of the copy button once clicked via this.state.copyText.
   */
  copy() {
    this.setState({ copyText: "Copied!" });
  }



  /**
   * Render the codeblock as a bootstrap row (please let Addison know if this is not ideal).
   * @return {<jsx>} The component.
   */
  render() {
    return (
      <Container>
        <Row className="codeblock">
          <Col md="12" style={{ "width": "100%" }}>
            <CopyToClipboard text={this.props.html}>
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
            <pre>
              <PrismCode className="language-html">
                {this.props.html}
              </PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    );
  }
}


HtmlCodeBlock.propTypes = {
  html: PropTypes.string
};

export default HtmlCodeBlock;
