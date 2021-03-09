const React = require('react');

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          query: this.props.query
        }
      }
      render() {
        return (
          <div className="search_header_container">
            <div className="search_header_logo"></div>
            <div className="search_header_search" action="/app/search" method="GET" role="search">
              <input type="text"  
              className="search_header_search_input" 
              name = "q"
              placeholder="Nunca dejes de buscar" 
              data-js="search" 
              defaultValue={this.props.query} />
              <button onClick={()=>console.log('hola')}>
              <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        );
      }
    }

module.exports = SearchHeader;