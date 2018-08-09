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
} from 'reactstrap';


const Subnav = ({ name, files }) => (
    <Navbar>
        <Button id="toggler">{name}</Button>
        <UncontrolledCollapse toggler="#toggler">
            <Nav navbar>
                {files}
            </Nav>
        </UncontrolledCollapse>
    </Navbar>
)
export default LocalizedComponent(Subnav);


/* {
    files.map(({ title, path }) => (
        <NavItem>
            <Link to={path} class="nav-link">
                {title}
            </Link>
        </NavItem>
    ))
} */