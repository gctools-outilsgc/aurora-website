import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import LocalizedComponent
	from '@gctools-components/react-i18n-translation-webpack';
import {
	Nav,
	Navbar,
	NavItem,
	NavbarBrand,
	NavbarToggler,
	UncontrolledCollapse,
	Button,
	Collapse,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ListGroup,
	ListGroupItem
} from 'reactstrap';


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
			name,
			path } = this.props;
		console.log(name);
		return (
			<ListGroup>
				<ListGroupItem onClick={this.toggle} className="dropdown-toggle">
					{(localizer.lang === "en_CA") ? name.split("/")[0] : name.split("/")[1]}
				</ListGroupItem>
				<Collapse isOpen={this.state.dropdownOpen}>
					{files.map((edges) => {
						if ((localizer.lang === "en_CA") && (edges.node.frontmatter.lang === "en"))
							return (
								<ListGroupItem active={path === edges.node.frontmatter.path} style={{"margin-left": "2rem"}}>
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
						else
							if ((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
								return (
									<ListGroupItem active={path === edges.node.frontmatter.path}>
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
export default LocalizedComponent(Subnav);
