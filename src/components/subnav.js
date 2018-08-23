import React from 'react';
import { Link } from 'gatsby';
import {
	Collapse,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
import { translate } from "react-i18next";

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
			path,
			i18n, } = this.props;

		const sortedFiles = files.sort((a, b) =>
			parseInt(a.node.frontmatter.subnav.split('/')[3], 10) - parseInt(b.node.frontmatter.subnav.split('/')[3], 10))
			;
		return (
			<ListGroup>
				<ListGroupItem onClick={this.toggle} className="dropdown-toggle" style={{"border": "0px"}}>
					{(i18n.language === "en") ? nameEn : nameFr}
				</ListGroupItem>
				<Collapse isOpen={this.state.dropdownOpen}>
					{sortedFiles.map((edges) => {
						if (
							((i18n.language === "en") && (edges.node.frontmatter.lang === "en")) ||
							((i18n.language === "fr") && (edges.node.frontmatter.lang === "fr"))
						)
							return (
								<ListGroupItem active={path === edges.node.frontmatter.path} style={{ "padding-left": "2rem",  "border": "0px" }}>
									<Link
										to={edges.node.frontmatter.path}
										activeStyle={{
											color: "white",
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
		);
	}
}
export default translate("default")(Subnav);
