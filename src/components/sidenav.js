import React from 'react';
import { Nav } from 'reactstrap';
import { I18n } from 'react-i18next';
import Subnav from './subnav';
import './sidenav.scss';

/** Component populates the side bar with collapsable subnavs
 *  Data is passed into it from a query made in MarkdownTemplate and then passed down to subnavs
 */
class Sidenav extends React.Component {
  render() {
    let subNameEn = '';
    let subNameFr = '';
    let subGroup = [];
    const subPieces = [];

    const data = this.props.data;

    data[this.props.path.split('/')[1]].edges.forEach((edges) => {
      if (edges.node.frontmatter.subnav.split('/')[1] !== subNameEn) {
        if (subNameEn !== '') {
          subPieces.push(
            <Subnav
              files={subGroup}
              nameEn={subNameEn}
              nameFr={subNameFr}
              path={this.props.path}
              i18n={this.props.i18n}
              key={subNameEn}
            />,
          );
        }
        subGroup = [];
        subNameEn = edges.node.frontmatter.subnav.split('/')[1];
        subNameFr = edges.node.frontmatter.subnav.split('/')[2];
      }
      subGroup.push(edges);
    });
    if (subGroup.push.length !== 0) {
      subPieces.push(
        <Subnav
          files={subGroup}
          nameEn={subNameEn}
          nameFr={subNameFr}
          path={this.props.path}
          i18n={this.props.i18n}
          key={subNameEn}
        />,
      );
    }
    return (
      <I18n ns={['translation']}>
        {(t, { i18n }) => (
          <nav
            className="sidenav"
            role="navigation"
            aria-label={t('SubNavigation')}
          >
            <Nav style={{ marginTop: '110px', marginBottom: '40px' }}>
              {subPieces}
            </Nav>
          </nav>
        )}
      </I18n>
    );
  }
}

export default Sidenav;
