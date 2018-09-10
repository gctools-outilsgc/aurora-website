import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Input,
    ListGroupItem
} from 'reactstrap';
import "./search.scss"

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            query: ``,
            results: [],
            dropdownOpen: false,
        }
    }

    render() {
        return (
            <div className="search-form search-form-round" style={{width:'300px', display:'inline-block'}}>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <label for="search" className="sr-only">
                        {this.props.placeholder}
                    </label>
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
                                <ListGroupItem tag={Link} to={page.path}>
                                    {page.title}
                                </ListGroupItem>
                            )
                            :
                            <ListGroupItem toggle={false}>
                                No results were found.
                            </ListGroupItem>
                        }
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    getSearchResults(query) {
        if (!query || !window.__LUNR__) return [];
        this.setState({
            dropdownOpen: true,
        })
        const lunrIndex = window.__LUNR__[this.props.lng];
        /* const results = lunrIndex.index.query(function () { // you can  customize your search , see https://lunrjs.com/guides/searching.html

            // look for an exact match and apply a large positive boost
            this.term(query);

            // look for terms that match the beginning of this queryTerm and apply a medium boost
            this.term(query + "*");

            // look for terms that match with an edit distance of 2 and apply a small boost
            this.term(query + "~2");
        }); */
        const results = lunrIndex.index.search(`${query}^100 ${query}*^10 ${query}~2`);
        return results.map(({ ref }) => lunrIndex.store[ref]);
    }

    search = event => {
        const query = event.target.value;
        const results = this.getSearchResults(query);
        this.setState({
            results: results.slice(0, 5),
            query,
        })
    }
}