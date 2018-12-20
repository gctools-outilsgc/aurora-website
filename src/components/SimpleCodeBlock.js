import React from 'react';
import { Button, ButtonGroup, Row, Col, Container } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import './prism-css.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { I18n } from "react-i18next";

/** Component that holds code in html and react/jsx with the ability to copy the code */
class SimpleCodeBlock extends React.Component {
  /**
   * Take the inputs as well as initialize the needed state.
   * @param {props} { isShowingCode } - The props not counting the i18n props
   */
  constructor(props) {
    super(props);

    this.state = {
      isShowingCode: this.props.isShowingCode,
      copyText: "Copy"
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
        <Row className="codeblock" style={(this.props.isShowingCode) ? { "display": "flex" } : { "display": "none" }}>

          <Col md="12" style={{ "width": "100%" }}>
            <CopyToClipboard text={this.props.code}>
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
              <PrismCode className={(this.props.language === "html") ? "language-html" : "language-jsx"}>
                {this.props.code}
              </PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    );
  }
}


SimpleCodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  isShowingCode: PropTypes.bool
};

SimpleCodeBlock.defaultProps = {
  isShowingCode: true
}


export default SimpleCodeBlock;
