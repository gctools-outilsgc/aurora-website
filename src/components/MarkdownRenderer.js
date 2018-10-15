import React from 'react';
import rehypeReact from 'rehype-react';
import PropTypes from 'prop-types';
import ToggleCodeBlock from '../components/ToggleCodeBlock';
import CodeBlock from '../components/CodeBlock';
import ButtonDropdownWrapper from '../components/ButtonDropdownWrapper';
import ButtonDropdownWrapperOpen from '../components/ButtonDropdownWrapperOpen';
import ComponentNav from '../components/ComponentNav';
import StrippedTable from '../components/StrippedTable';
import * as reactstrap from 'reactstrap';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import * as ReactExamples from '../code-examples/react-examples';
import * as ReactExamples1 from '../code-examples/react-examples1';
import * as HtmlExamples from '../code-examples/html-examples';
import * as HtmlExamples1 from '../code-examples/html-examples1';

class MarkdownRenderer extends React.Component {
  render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        // HTML COMPONENT EXAMPLES
        htmlmodal1: HtmlExamples1.Modal1,
        htmlpagination1: HtmlExamples1.Pagination1,
        htmlpagination2: HtmlExamples1.Pagination2,
        htmlpagination3: HtmlExamples1.Pagination3,
        htmlpagination4: HtmlExamples1.Pagination4,
        htmldropdown1: HtmlExamples1.Dropdown1,
        htmldropdown2: HtmlExamples1.Dropdown2,
        htmldropdown3: HtmlExamples1.Dropdown3,
        htmlprogress1: HtmlExamples1.Progress1,
        htmlprogress2: HtmlExamples1.Progress2,
        htmlprogress3: HtmlExamples1.Progress3, 
        htmlprogress4: HtmlExamples1.Progress4, 
        htmlprogress5: HtmlExamples1.Progress5,
        htmlalert1: HtmlExamples.AlertExample1, 
        htmlalert2: HtmlExamples.AlertExample2, 
        htmlalert3: HtmlExamples.AlertExample3, 
        htmlbadge1: HtmlExamples.BadgeExample1, 
        htmlbadge2: HtmlExamples.BadgeExample2, 
        htmlbadge3: HtmlExamples.BadgeExample3, 
        htmlbreadcrumb1: HtmlExamples.BreadcrumbExample1,
        htmlcard1: HtmlExamples.CardExample1,
        htmlcard2: HtmlExamples.CardExample2,
        htmlcard3: HtmlExamples.CardExample3,
        htmlcard4: HtmlExamples.CardExample4,
        // REACT COMPONENT EXAMPLES
        reactmodal1: ReactExamples1.Modal1,
        reactmodal2: ReactExamples1.Modal2,
        reactpagination1: ReactExamples1.Pagination1,
        reactpagination2: ReactExamples1.Pagination2,
        reactpagination3: ReactExamples1.Pagination3,
        reactpagination4: ReactExamples1.Pagination4,
        reactdropdown1: ReactExamples1.Dropdown1,
        reactdropdown2: ReactExamples1.Dropdown2,
        reactdropdown3: ReactExamples1.Dropdown3,
        reactprogess1: ReactExamples1.Progress1,
        reactprogess2: ReactExamples1.Progress2, 
        reactprogess3: ReactExamples1.Progress3, 
        reactprogess4: ReactExamples1.Progress4,
        reactprogess5: ReactExamples1.Progress5,
        reactalert1: ReactExamples.AlertExample1, 
        reactalert2: ReactExamples.AlertExample2, 
        reactalert3: ReactExamples.AlertExample3, 
        reactbadge1: ReactExamples.BadgeExample1, 
        reactbadge2: ReactExamples.BadgeExample2, 
        reactbadge3: ReactExamples.BadgeExample3, 
        reactbreadcrumb1: ReactExamples.BreadcrumbExample1,
        // OTHER
        componentnav: ComponentNav, strippedtable: StrippedTable, buttondropdownopen: ButtonDropdownWrapperOpen, helmet: Helmet, togglecodeblock: ToggleCodeBlock, codeblock: CodeBlock, mdbuttondropdown: ButtonDropdownWrapper, alert: reactstrap.Alert, badge: reactstrap.Badge, breadcrumb: reactstrap.Breadcrumb, breadcrumbitem: reactstrap.BreadcrumbItem, button: reactstrap.Button, buttondropdown: reactstrap.ButtonDropdown, buttongroup: reactstrap.ButtonGroup, buttontoolbar: reactstrap.ButtonToolbar, card: reactstrap.Card, cardblock: reactstrap.CardBlock, cardbody: reactstrap.CardBody, cardcolumns: reactstrap.CardColumns, carddeck: reactstrap.CardDeck, cardfooter: reactstrap.CardFooter, cardgroup: reactstrap.CardGroup, cardheader: reactstrap.CardHeader, cardimg: reactstrap.CardImg, cardimgoverlay: reactstrap.CardImgOverlay, cardlink: reactstrap.CardLink, cardsubtitle: reactstrap.CardSubtitle, cardtext: reactstrap.CardText, cardtitle: reactstrap.CardTitle, carousel: reactstrap.Carousel, carouselcaption: reactstrap.CarouselCaption, carouselcontrol: reactstrap.CarouselControl, carouselindicators: reactstrap.CarouselIndicators, carouselitem: reactstrap.CarouselItem, mdcol: reactstrap.Col, collapse: reactstrap.Collapse, container: reactstrap.Container, custominput: reactstrap.CustomInput, dropdown: reactstrap.Dropdown, dropdownitem: reactstrap.DropdownItem, dropdownmenu: reactstrap.DropdownMenu, dropdowntoggle: reactstrap.DropdownToggle, fade: reactstrap.Fade, form: reactstrap.Form, formfeedback: reactstrap.FormFeedback, formgroup: reactstrap.FormGroup, formtext: reactstrap.FormText, input: reactstrap.Input, inputgroup: reactstrap.InputGroup, inputgroupaddon: reactstrap.InputGroupAddon, inputgroupbutton: reactstrap.InputGroupButton, inputgroupbuttondropdown: reactstrap.InputGroupButtonDropdown, inputgrouptext: reactstrap.InputGroupText, jumbotron: reactstrap.Jumbotron, label: reactstrap.Label, listgroup: reactstrap.ListGroup, listgroupitem: reactstrap.ListGroupItem, listgroupitemheading: reactstrap.ListGroupItemHeading, listgroupitemtext: reactstrap.ListGroupItemText, media: reactstrap.Media, modal: reactstrap.Modal, modalbody: reactstrap.ModalBody, modalfooter: reactstrap.ModalFooter, modalheader: reactstrap.ModalHeader, nav: reactstrap.Nav, navbar: reactstrap.Navbar, navbarbrand: reactstrap.NavbarBrand, navbartoggler: reactstrap.NavbarToggler, navdropdown: reactstrap.NavDropdown, navitem: reactstrap.NavItem, navlink: reactstrap.NavLink, pagination: reactstrap.Pagination, paginationitem: reactstrap.PaginationItem, paginationlink: reactstrap.PaginationLink, popover: reactstrap.Popover, popoverbody: reactstrap.PopoverBody, popovercontent: reactstrap.PopoverContent, popoverheader: reactstrap.PopoverHeader, popovertitle: reactstrap.PopoverTitle, poppercontent: reactstrap.PopperContent, poppertargethelper: reactstrap.PopperTargetHelper, progress: reactstrap.Progress, row: reactstrap.Row, tabcontent: reactstrap.TabContent, table: reactstrap.Table, tabpane: reactstrap.TabPane, tooltip: reactstrap.Tooltip, uncontrolledalert: reactstrap.UncontrolledAlert, uncontrolledbuttondropdown: reactstrap.UncontrolledButtonDropdown, uncontrolledcarousel: reactstrap.UncontrolledCarousel, uncontrolledcollapse: reactstrap.UncontrolledCollapse, uncontrolleddropdown: reactstrap.UncontrolledDropdown, uncontrollednavdropdown: reactstrap.UncontrolledNavDropdown, uncontrolledtooltip: reactstrap.UncontrolledTooltip
      }
    }).Compiler;
    if (this.props.lang === "en") {
      return(
        <reactstrap.Container className="mt-4 pb-4 doc-container">
          <main id="main-content" role="main">
            {renderAst(this.props.eng.htmlAst)}
          </main>
          <Footer/>
        </reactstrap.Container>
      );
    } else {
      return(
        <reactstrap.Container className="mt-4 pb-4 doc-container">
          <main id="main-content" role="main">
            {renderAst(this.props.fr.htmlAst)}
          </main>
          <Footer/>
        </reactstrap.Container>
      );
    }

  }
}

MarkdownRenderer.propTypes = {
  eng: PropTypes.any,
  fr: PropTypes.any,
  lang: PropTypes.string
};

export default MarkdownRenderer;
