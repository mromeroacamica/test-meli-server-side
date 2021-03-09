const React = require('react');
const Container = require('./components/Container');

class Item extends React.Component {

  

  render() {
    
    return (
      <Container {...this.props}>
        
      </Container>
    );
  }
}

module.exports = Item;