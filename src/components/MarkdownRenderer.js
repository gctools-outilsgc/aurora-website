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
import * as HtmlExamples from '../code-examples/html-examples';
import * as HtmlButtonExamples from '../code-examples/htmlbuttons-examples';
import * as ReactButtonExamples from '../code-examples/reactbuttons-examples';
import * as HtmlButtonGroupExamples from '../code-examples/htmlbutton-group-examples';
import * as ReactButtonGroupExamples from '../code-examples/reactbutton-group-examples';
import * as HtmlButtonDropdownExamples from '../code-examples/htmlbuttondropdown-examples';
import * as ReactButtonDropdownExamples from '../code-examples/reactbuttondropdown-examples';

class MarkdownRenderer extends React.Component {
  render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        // HTML COMPONENT EXAMPLES
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
        htmlbuttonexample1: HtmlButtonExamples.ButtonExample1, htmlbuttonexample2: HtmlButtonExamples.ButtonExample2, htmlbuttonexample3: HtmlButtonExamples.ButtonExample3,
        htmlbuttonexample4: HtmlButtonExamples.ButtonExample4, htmlbuttonexample5: HtmlButtonExamples.ButtonExample5, htmlbuttonexample6: HtmlButtonExamples.ButtonExample6,
        htmlbuttonexample7: HtmlButtonExamples.ButtonExample7, htmlbuttonexample8: HtmlButtonExamples.ButtonExample8, htmlbuttonexample9: HtmlButtonExamples.ButtonExample9,
        htmlbuttonexample10: HtmlButtonExamples.ButtonExample10, htmlbuttonExample11: HtmlButtonExamples.ButtonExample11, htmlbuttonexample12: HtmlButtonExamples.ButtonExample12,
        htmlbuttongroupexample1: HtmlButtonGroupExamples.ButtonGroupExample1, htmlbuttongroupexample2: HtmlButtonGroupExamples.ButtonGroupExample2, htmlbuttongroupexample3: HtmlButtonGroupExamples.ButtonGroupExample3,
        htmlbuttongroupexample4: HtmlButtonGroupExamples.ButtonGroupExample4, htmlbuttongroupexample5: HtmlButtonGroupExamples.ButtonGroupExample5, htmlbuttongroupexample6: HtmlButtonGroupExamples.ButtonGroupExample6,
        // REACT COMPONENT EXAMPLES
        reactalert1: ReactExamples.AlertExample1, 
        reactalert2: ReactExamples.AlertExample2, 
        reactalert3: ReactExamples.AlertExample3, 
        reactbadge1: ReactExamples.BadgeExample1, 
        reactbadge2: ReactExamples.BadgeExample2, 
        reactbadge3: ReactExamples.BadgeExample3, 
        reactbreadcrumb1: ReactExamples.BreadcrumbExample1,
        reactbuttonexample1: ReactButtonExamples.ButtonExample1, buttonexample1properties :ReactButtonExamples.ButtonExample1Properties,
        reactbuttonexample2: ReactButtonExamples.ButtonExample2, reactbuttonexample3: ReactButtonExamples.ButtonExample3,
        reactbuttonexample4: ReactButtonExamples.ButtonExample4, reactbuttonexample5: ReactButtonExamples.ButtonExample5,
        reactbuttonexample6: ReactButtonExamples.ButtonExample6, reactbuttonexample7: ReactButtonExamples.ButtonExample7,
        reactbuttonexample8: ReactButtonExamples.ButtonExample8, reactbuttonexample9: ReactButtonExamples.ButtonExample9,
        reactbuttongroupexample1: ReactButtonGroupExamples.ButtonGroupExample1, reactbuttongroupexample1properties: ReactButtonGroupExamples.ButtonGroupExample1Properties,
        reactbuttongroupexample2: ReactButtonGroupExamples.ButtonGroupExample2, reactbuttongroupexample3: ReactButtonGroupExamples.ButtonGroupExample3,
        reactbuttongroupexample4: ReactButtonGroupExamples.ButtonGroupExample4, reactbuttongroupexample5: ReactButtonGroupExamples.ButtonGroupExample5,
        htmlbuttondropdownexample1: HtmlButtonDropdownExamples.ButtonDropdownExample1, htmlbuttondropdownexample2: HtmlButtonDropdownExamples.ButtonDropdownExample2,
        htmlbuttondropdownexample3: HtmlButtonDropdownExamples.ButtonDropdownExample3, htmlbuttondropdownexample4: HtmlButtonDropdownExamples.ButtonDropdownExample4,
        reactbuttondropdownexample1: ReactButtonDropdownExamples.ButtonDropDownExample1, reactbuttondropdownexample1properties : ReactButtonDropdownExamples.ButtonDropDownExample1Properties,
        reactbuttondropdownexample2 : ReactButtonDropdownExamples.ButtonDropDownExample2, reactbuttondropdownexample3: ReactButtonDropdownExamples.ButtonDropDownExample3,
        reactbuttondropdownexample4 : ReactButtonDropdownExamples.ButtonDropDownExample4, reactbuttondropdownexample5: ReactButtonDropdownExamples.ButtonDropDownExample5,
        reactbuttondropdownexample6 : ReactButtonDropdownExamples.ButtonDropDownExample6,
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
