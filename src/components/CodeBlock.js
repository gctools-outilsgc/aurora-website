import React from 'react';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import './CodeBlock.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CodeBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: (this.props.defaultOutput === undefined || this.props.defaultOutput === "html") ? "html" : "react",
            copied: "COPY CODE"
        }

        this.changeOutput = this.changeOutput.bind(this);
        this.copy = this.copy.bind(this);
    }

    copy() {
        this.setState({copied: "Copied!"});
    }

    changeOutput(value) {
        if (this.state.output !== value) {
            this.setState({output: value});
            if ( this.state.copied === "Copied!" ) {
                this.setState({copied: "COPY CODE"});
            }
        }
    }

    render() {
        return (
            <Row className="codeblock" style={ {"background-color": "white"} }>
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
                            { this.state.copied }
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

export default CodeBlock;
