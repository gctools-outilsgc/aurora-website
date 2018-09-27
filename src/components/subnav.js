import React from 'react';
import Link from 'gatsby-link';
import {
	Collapse,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
import './subnav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Subnav extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
      dropdownOpen: true
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {

		const sortedFiles = this.props.files.sort((a, b) =>
			parseInt(a.node.frontmatter.subnav.split('/')[3], 10) - parseInt(b.node.frontmatter.subnav.split('/')[3], 10))
      ;
		return (
      <ListGroupItem className="collapseItem">
        <a href="#" aria-expanded={this.state.dropdownOpen} onClick={this.toggle} style={{"border": "0px", "fontSize":"1.2125em", "fontFamily": "'Nunito Sans', sans-serif", "marginTop": "5px", "marginBottom": "5px", "fontWeight": "600"}}>
          {(this.props.i18n.i18n.language === "en") ? this.props.nameEn : this.props.nameFr}
          <FontAwesomeIcon className="ml-1" style={{"fontSize":"0.7em"}} icon={faChevronDown} />
        </a>
        <Collapse isOpen={this.state.dropdownOpen}>
          <ListGroup>
            {sortedFiles.map((edges) => {
              if (
                ((this.props.i18n.i18n.language === "en") && (edges.node.frontmatter.lang === "en")) ||
                ((this.props.i18n.i18n.language === "fr") && (edges.node.frontmatter.lang === "fr"))
              )
                return (
                  <ListGroupItem className="subItem" style={{ "paddingLeft": "2rem",  "border": "0px"}}>
                    <Link
                      className={(this.props.path === edges.node.frontmatter.path) ? "subLink active-nav" : "subLink"}
                      to={edges.node.frontmatter.path}
                    >
                      {edges.node.frontmatter.title}
                    </Link>
                  </ListGroupItem>
                );
            })
            }
          </ListGroup>
        </Collapse>
    </ListGroupItem>
		);
	}
}
export default Subnav;