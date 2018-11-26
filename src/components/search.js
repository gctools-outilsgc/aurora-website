import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Input, Label } from 'reactstrap';
import {indexEN, indexFR, searchValuesEN, searchValuesFR} from './SearchIndex';
import {I18n} from 'react-i18next';

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.onBlur = this.onBlur.bind(this);
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
            dropdownOpen: true,
          })
        } else {
          this.setState({
            results: [],
            query,
            dropdownOpen: true,
          })
        }

    }

    onBlur(e) {
      var currentTarget = e.currentTarget;

      setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
            this.setState({
              dropdownOpen: false
            })
        }
      }, 0);
    }

    render() {
      return (
        <div className="search-form search-form-round dropdown"  onBlur={this.onBlur} style={{width:'300px'}}>
          <Label for={"search-" + this.props.section} className="sr-only">
            {this.props.placeholder}
          </Label>
          <Input
            tag={Input}
            type="text"
            id={"search-" + this.props.section}
            value={this.state.query}
            onChange={this.search}
            placeholder={this.props.placeholder}
            aria-owns={"results-" + this.props.section}
          />

          {(this.state.results.length !== 0) ?
            <div id={"results-" + this.props.section} className={"container-fluid dropdown-menu aurora-search-results " + (this.state.dropdownOpen ? "show" : "")}>
              <span aria-live="assertive" class="sr-only">
                {(this.props.lng == "en") ?
                  "Showing " + this.state.results.length + " results."
                :
                  "Indication du " + this.state.results.length + " des résultats."
                }
              </span>
              {this.state.results.map(page =>
                  <Link className="list-group-item" to={page.ref}>
                      {
                        (this.props.lng === "en") ?
                        searchValuesEN[page.ref]
                        :
                        searchValuesFR[page.ref]
                      }
                  </Link>
              )}
            </div>
            :
            (this.state.query.length > 0) &&
              <div id={"results-" + this.props.section} className={"container-fluid dropdown-menu " + (this.state.dropdownOpen ? "show" : "")}>
                <div className="list-group-item" aria-live="assertive" style={{"position":"relative", "display":"block", "padding":"0.75rem 1.25rem"}}>
                  <I18n ns={["translation"]}>
                    {
                      (t) => (
                        t("search_no_results")
                      )
                    }
                  </I18n>
                </div>
              </div>
          }
        </div>


      )
  }
}
