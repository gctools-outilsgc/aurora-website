import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import {
  Nav,
  NavItem,
  UncontrolledCollapse,
} from 'reactstrap';


class Sidenav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <StaticQuery query={graphql`
        query{
          component:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/component/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                  }
                }
            }
          }
          overview:allMarkdownRemark(
            filter: 
              {frontmatter: {path: {regex: "/overview/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                  }
                }
            }
          }
          content:allMarkdownRemark(
            filter: 
            {frontmatter: {path: {regex: "/content/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ) {
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                  }
                }
            }
          }
          identity:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/identity/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ) {
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                  }
                }
            }
          }
          data:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/data/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                  }
                }
            }
          }
        }
    `}
        render={data => (
          <div className="col-sm-auto">
            <Nav vertical pills justify>
              {
                data[this.props.path.split("/")[1]].edges.map((edges) => {
                  if ((localizer.lang === "en_CA") && (edges.node.frontmatter.lang === "en"))
                    return (
                      <NavItem>
                        <Link to={edges.node.frontmatter.path} class="nav-link">
                          {edges.node.frontmatter.title}
                        </Link>
                      </NavItem>
                    );
                  else
                    if ((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
                      return (
                        <NavItem>
                          <Link to={edges.node.frontmatter.path} class="nav-link">
                            {edges.node.frontmatter.title}
                          </Link>
                        </NavItem>);
                }
                )
              }
            </Nav>
          </div>
        )}
      />
    )
  }
}
;



export default LocalizedComponent(Sidenav);

