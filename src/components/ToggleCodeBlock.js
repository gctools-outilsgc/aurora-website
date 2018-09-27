import React from 'react';
import { Button, Row, Label, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { I18n } from "react-i18next";
import CodeBlock from './CodeBlock';

/** Component that extends the functionality of CodeBlock by adding the option to hide/show the CodeBlock component */
class ToggleCodeBlock extends CodeBlock {
    /**
     * Take the inputs as well as initialize the needed state.
     * @param {props} { defaultOutput, html, react, isShowingCode } - The props not counting the i18n props
     */
    constructor(props) {
        super(props);
        
        this.state = {
            isShowingCode: false
        }

        this.toggle = this.toggle.bind(this);
        this.returnButton = this.returnButton.bind(this);
    }

    /**
     * Toggle between showing the CodeBlock element and not showing the CodeBlock element
     */
    toggle() {
        this.setState(prevState => ({
            isShowingCode: !prevState.isShowingCode
        }));
    }

    /**
     * Generates the SHOW CODE / HIDE CODE button in order to not cluter the render() code.
     * @return {<jsx>} The show/hide button and its label
     */
    returnButton() {
        return(
            <div>
                <Button 
                    onClick={ this.toggle } 
                    style={ 
                        {
                            "width": "30px",
                            "height": "30px",
                            "padding": "0px 0px 5px 0px",
                            "textAlign": "center",
                            "fontSize": "20px",
                            "fontWeight": "900",
                            "marginRight": "15px"
                        } 
                    } 
                    size="sm"
                    color="info">
                    { (this.state.isShowingCode) ? "-" : "+" }
                </Button>
                <Label onClick={ this.toggle } >
                    <I18n>
                      { 
                        (t) => (
                          t((this.state.isShowingCode) ? "HIDE CODE" : "SHOW CODE")
                        )
                      }
                    </I18n> 
                </Label>
            </div>
        );
    }

    /**
     * Renders the CodeBlock as well as the SHOW CODE / HIDE CODE button in the correct location.
     * @return {<jsx>} A CodeBlock element with an associated show/hide button.
     */
    render() {
        return (
          <Container>
            <Row>
                { (!this.state.isShowingCode) ? this.returnButton() : <div></div> }
                <CodeBlock 
                    html={ this.props.html } 
                    react={ this.props.react } 
                    defaultOutput={ this.props.defaultOutput }
                    isShowingCode={ this.state.isShowingCode }
                />
                { (this.state.isShowingCode) ? this.returnButton() : <div></div> }
            </Row>
          </Container>
        );
    }
}

ToggleCodeBlock.propTypes = {
    defaultOutput: PropTypes.string,
    html: PropTypes.string,
    react: PropTypes.string,
    isShowingCode: PropTypes.bool
}

ToggleCodeBlock.defaultProps = {
    defaultOutput: "html",
    isShowingCode: false
}

export default ToggleCodeBlock;