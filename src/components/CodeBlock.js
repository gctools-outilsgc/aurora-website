import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CodeBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: "html",
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
            <div className="codeblock row" style={ {"background-color": "white"} }>
                <div className="col-md-9">
                    <ButtonGroup className="float-left">
                        <Button 
                            onClick={ () => this.changeOutput("html") } 
                            style={ {"background-color": "white"} }
                            color="default"
                        >
                            HTML
                        </Button>
                        <Button 
                            onClick={ () => this.changeOutput("react") } 
                            style={ {"background-color": "white"} }
                            color="default"
                        >
                            REACT
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="col-md-3">
                    <CopyToClipboard text={ (this.state.output === "html") ? this.props.html : this.props.react }>
                        <Button onClick={ this.copy } style={ {"background-color": "white", "color": "black"} } className="float-right">
                            { this.state.copied }
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className="col-md-12">
                    <pre>
                        <PrismCode className={ (this.state.output === "html") ? "language-html" : "language-jsx" }>
                            {(this.state.output === "html") ? this.props.html : this.props.react }
                        </PrismCode>
                    </pre>
                </div>
            </div>
        );
    }
}

export default CodeBlock;