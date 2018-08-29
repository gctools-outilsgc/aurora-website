import React from 'react';
import { Button, ButtonGroup, Row, Col, Label } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { translate } from "react-i18next";

/** Component that holds code in html and react/jsx with the ability to copy the code */
class CodeBlock extends React.Component {
    /**
     * Take the inputs as well as initialize the needed state.
     * @param {props} { defaultOutput, html, react, isShowingCode } - The props not counting the i18n props
     */
    constructor(props) {
        super(props);

        this.state = {
            output: (this.props.defaultOutput === undefined || this.props.defaultOutput === "html") ? "html" : "react",
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
        this.setState({copyText: "Copied!"});
    }

    /**
     * Change the output of the code box between the supplied values for html and react.
     * @param {string} value - "html" or "react"
     */
    changeOutput(value) {
        if (this.state.output !== value) {
            this.setState({output: value});
            if ( this.state.copyText === "Copied!") {
                this.setState({copyText: "COPY CODE"});
            }
        }
    }

    /**
     * Render the codeblock as a bootstrap row (please let Addison know if this is not ideal).
     * @return {<jsx>} The component.
     */
    render() {
        return (
            <Row className="codeblock" style={(this.props.isShowingCode) ? {"display": "flex", "background-color": "white"} : {"display": "none", "background-color": "white"} }>
                <Col md="9">
                    <ButtonGroup className="float-left">
                        <Button 
                            onClick={ () => this.changeOutput("html") } 
                            style={ (this.state.output === "html") ? {"background-color": "white", "border-bottom-color": "#5DC1BE"} :  {"background-color": "white"} }
                            color="default"
                        >
                            HTML
                        </Button>
                        <Button 
                            onClick={ () => this.changeOutput("react") } 
                            style={ (!(this.state.output === "html")) ? {"background-color": "white", "border-bottom-color": "#5DC1BE"} :  {"background-color": "white"} }
                            color="default"
                        >
                            REACT
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md="3">
                    <CopyToClipboard text={ (this.state.output === "html") ? this.props.html : this.props.react }>
                        <Button onClick={ this.copy } style={ {"background-color": "white", "color": "black"} } className="float-right">
                            { this.props.t(this.state.copyText) }
                        </Button>
                    </CopyToClipboard>
                </Col>
                <Col md="12">
                    <pre>
                        <PrismCode className={ (this.state.output === "html") ? "language-html" : "language-jsx" }>
                            {(this.state.output === "html") ? this.props.html : this.props.react }
                        </PrismCode>
                    </pre>
                </Col>
            </Row>
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


export default translate("CodeBlock")(CodeBlock);