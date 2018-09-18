import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Input,
    ListGroupItem,
    Label
} from 'reactstrap';
import {indexEN, indexFR, searchValuesEN, searchValuesFR} from './SearchIndex';
import {I18n} from 'react-i18next';

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
        this.state = {
          query: ``,
          results: [],
          dropdownOpen: false,
        }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    getSearchResults(query) {
      if (query.length > 0) {
        if (this.props.lng == "en") {
          return indexEN.search(`${query}^100 ${query}*^10 ${query}~2`);
        } else {
          return indexFR.search(`${query}^100 ${query}*^10 ${query}~2`);
        }
      } else {
        return null;
      }
      
    }

    search = event => {
        const query = event.target.value;
        const results = this.getSearchResults(query);
        
        if (results) {
          this.setState({
            results: results.slice(0, 5),
            query,
          })
        } else {
          this.setState({
            results: [],
            query,
          })
        }
        
    }

    render() {
      return (
        <div className="search-form search-form-round" style={{width:'300px'}}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <Label for="search" className="sr-only">
              {this.props.placeholder}
            </Label>
            <DropdownToggle
              tag={Input}
              type="text"
              id="search"
              value={this.state.query}
              onChange={this.search}
              placeholder={this.props.placeholder}
            />
            <DropdownMenu className="container-fluid">
              {(this.state.results.length !== 0) ?

                this.state.results.map(page =>
                    <ListGroupItem tag={Link} to={page.ref}>
                        {
                          (this.props.lng === "en") ?
                          searchValuesEN[page.ref]
                          :
                          searchValuesFR[page.ref]
                        }
                    </ListGroupItem>
                )
                :
                (this.state.query.length > 0) ?
                <ListGroupItem toggle={"false"}>
                  <I18n ns={["translation"]}>
                    {
                      (t) => (
                        t("search_no_results")
                      )
                    }
                  </I18n>
                </ListGroupItem>
                :
                <ListGroupItem toggle={"false"}>
                  <I18n ns={["translation"]}>
                    {
                      (t) => (
                        t("search_start_searching")
                      )
                    }
                  </I18n>
                </ListGroupItem>
              }
            </DropdownMenu>
          </Dropdown>
        </div>
      )
  }
}