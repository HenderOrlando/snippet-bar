const React = require('react');

const SearchBar = React.createClass({
  propTypes: {
    filterSnippets: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      showClearButton: false
    };
  },

  toggleClearButton(event) {
    this.state.showClearButton = event.target.value.length > 0;

    this.props.filterSnippets(event);
  },

  clearSearchBar() {
    this.refs.search.value     = '';
    this.state.showClearButton = false;

    this.props.filterSnippets();
  },

  render() {
    let clearButton = null;

    if (this.state.showClearButton) {
      clearButton = (
        <button className="search-bar-clear-button" onClick={this.clearSearchBar}>x</button>
      );
    }

    return (
      <div className="search-bar">
        <input
          type="text"
          ref="search"
          className="search-bar-field"
          placeholder="Search..."
          onChange={this.toggleClearButton} />
          
        {clearButton}
      </div>
    );
  }
});

module.exports = SearchBar;
