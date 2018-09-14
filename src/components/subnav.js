import React from 'react';
import { Link } from 'gatsby';
import {
	Collapse,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
import { translate } from "react-i18next";
import './subnav.scss'
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
		const {
			files,
			nameEn,
			nameFr,
			path,
			i18n, } = this.props;

		const sortedFiles = files.sort((a, b) =>
			parseInt(a.node.frontmatter.subnav.split('/')[3], 10) - parseInt(b.node.frontmatter.subnav.split('/')[3], 10))
			;
		return (
			<ListGroupItem className="collapseItem">
				<a href="#" aria-expanded={this.state.dropdownOpen} onClick={this.toggle} style={{"border": "0px", "font-size":"1.2125em", "font-family": "'Nunito Sans', sans-serif", "margin-top": "5px", "margin-bottom": "5px", "font-weight": "600"}}>{(i18n.language === "en") ? nameEn : nameFr}<FontAwesomeIcon className="ml-1" style={{"fontSize":"0.7em"}} icon={faChevronDown} /></a>
				<Collapse isOpen={this.state.dropdownOpen}>
					<ListGroup>
						{sortedFiles.map((edges) => {
							if (
								((i18n.language === "en") && (edges.node.frontmatter.lang === "en")) ||
								((i18n.language === "fr") && (edges.node.frontmatter.lang === "fr"))
							)
								return (
									<ListGroupItem className="subItem" active={path === edges.node.frontmatter.path} style={{ "padding-left": "2rem",  "border": "0px"}}>
										<Link
											className="subLink"
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
					</ListGroup>
				</Collapse>
			</ListGroupItem>
		);
	}
}
export default translate("default")(Subnav);
