import React from 'react';
import { Link } from 'gatsby';
import {
	Collapse,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
import { I18n } from "react-i18next";
import { translate } from "react-i18next";
import './subnav.scss';

class Subnav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		const {
			files,
			nameEn,
			nameFr,
      path
    } = this.props;

		const sortedFiles = files.sort((a, b) =>
			parseInt(a.node.frontmatter.subnav.split('/')[3], 10) - parseInt(b.node.frontmatter.subnav.split('/')[3], 10))
			;
		return (
      <I18n>
        {
          (t, { i18n }) => (
            <ListGroup>
              <ListGroupItem onClick={this.toggle} className="dropdown-toggle" style={{"border": "0px", "font-size":"1.3125em", "font-family": "'Nunito Sans', sans-serif", "margin-top": "5px", "margin-bottom": "5px", "font-weight": "600"}} id='listGroupItem'>
                {(i18n.language === "en") ? nameEn : nameFr}
              </ListGroupItem>
              <Collapse isOpen={this.state.dropdownOpen}>
                {sortedFiles.map((edges) => {
                  if (
                    ((i18n.language === "en") && (edges.node.frontmatter.lang === "en")) ||
                    ((i18n.language === "fr") && (edges.node.frontmatter.lang === "fr"))
                  )
                    return (
                      <ListGroupItem id='listGroupItem' active={path === edges.node.frontmatter.path} style={{ "padding-left": "2rem",  "border": "0px"}}>
                        <Link
                          id="link"
                          to={edges.node.frontmatter.path}
                          activeStyle={{
                            color: "white",
                            backgroundColor: "#467B8D"
                          }}
                        >
                          {edges.node.frontmatter.title}
                        </Link>
                      </ListGroupItem>
                    );
                })
                }
              </Collapse>
            </ListGroup>
          )
        }
      </I18n>
		);
	}
}
export default Subnav;
