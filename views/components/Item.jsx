const React = require('react');

class Item extends React.Component {
  render() {
    this.props = this.props.items
    console.log(this.props)
    return (
      <a className="item" href={`/app/items/${this.props.id}`}>
        <div className="item_picture">
          <img className="item_picture_img" src="../../assets/foto-cama.jpg" alt={this.props.title}/>
          {/* <img className="item_picture_img" src={this.props.thumbnail} alt={this.props.title}/> */}
        </div>
        <div className="item_description">
          <div className="item_price_shipping_container">
            <div className="item_price">$ {this.props.price.amount}</div>
            {this.props.free_shipping && <i class="fas fa-car"></i>}
          </div>
          <div className="item_title">{this.props.title}</div>
        </div>
        {/* <div className="search-item_location">{this.props.address.state_name}</div> */}
      </a>
    );
  }
}

module.exports = Item;