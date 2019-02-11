import React from 'react';
import { Tooltip, Button } from 'reactstrap';
import classNames from 'classnames';
import { I18n } from "react-i18next";

export default class TooltipExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }



  render() {
    const classes = 'tooltip-inner'
    return (
      <div>
        <Button id={this.props.id} color="secondary">
          <I18n>
            {
              (t) => (
                t("tooltip")
              )
            }
          </I18n>
        </Button>
        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target={this.props.id} toggle={this.toggle}>
          <I18n>
            {
              (t) => (
                t("tooltipexample")
              )
            }
          </I18n>
        </Tooltip>
      </div>
    );
  }
}
