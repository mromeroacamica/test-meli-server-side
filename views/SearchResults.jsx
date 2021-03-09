const React = require('react');
const Item = require('./components/Item');
const Container = require('./components/Container');

class SearchResults extends React.Component {

  render() {
    return (
      <Container {...this.props}>
        <div>ESTOS SON LOS RESULTADOS</div>
        {/* {this.props.results.map((item) =>
          <Item {...item} key={item.id}/>
        )} */}
      </Container>
    );
  }
}

module.exports = SearchResults;
  