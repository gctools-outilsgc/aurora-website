import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import {I18n} from 'react-i18next';

/*
  Creates tabs to render HTML/React/Design tabs. To be used with DocumentationTabPanel component.

  Expected format:

    <documentationtabs>
      <doctabpanel type="html">
      </doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
      </doctabpanel>
    </documentationtabs>

  To remove tab link add remove="{section}" ex: <documentationtabs remove="react">

  */
class DocumentationTabs extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    this.changeOutput = this.changeOutput.bind(this);
    const { cookies } = this.props;

    if(this.props.remove == cookies.get('role')){
      var out = (cookies.get('role') === "html") ? "react" : "html"
    } else {
      var out = cookies.get('role');
    }

    this.state = {
      output: out || 'html'
    };
  }

  changeOutput(value) {
    const { cookies } = this.props;

    if (this.state.output !== value) {
      this.setState({ output: value });
      cookies.set('role', value, { path: '/' });
    }
  }

  render() {
    const tabPanels = React.Children.map(this.props.children, child => {
      if(child.props){
        return React.cloneElement(child, {
          visible: (child.props.type === this.state.output) ? "true" : "false"
        });
      }
    });
    return (
      <div>
        <Nav className="nav-justified mb-4" tabs>
          {this.props.remove != "html" &&
            <NavItem>
              <NavLink
              href="#"
              data-toggle="tab"
              onClick={() => this.changeOutput("html")}
              className={(!(this.state.output === "html")) ? "" : "active"}>
                HTML
              </NavLink>
            </NavItem>
          }
          {this.props.remove != "react" &&
            <NavItem>
              <NavLink
              href="#"
              data-toggle="tab"
              onClick={() => this.changeOutput("react")}
              className={(!(this.state.output === "react")) ? "" : "active"}
              >
                React
              </NavLink>
            </NavItem>
          }
          {this.props.remove != "design" &&
            <NavItem>
              <NavLink
              href="#"
              data-toggle="tab"
              onClick={() => this.changeOutput("design")}
              className={(!(this.state.output === "design")) ? "" : "active"}
              >
              <I18n ns={["translation"]}>
                {
                  (t) => (
                    t("Design")
                  )
                }
              </I18n>
              </NavLink>
            </NavItem>
          }
        </Nav>
        {tabPanels}
      </div>
    );
  }
}

export default withCookies(DocumentationTabs);
