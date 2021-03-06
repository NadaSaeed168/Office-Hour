import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    this.getCards();
  }
  getCards() {
    axios.get('http://localhost:3001/api/Cards')
      .then(response => {
        this.setState({ cards: response.data }, () => {
          console.log(this.state);
        });
      });
  }

  render() {
    const cardItems = this.state.cards.map((card, i) => {
      return (
        <div key={i}>
          <If condition ={ this.props.account.id === card.accountID }>
            <label className='collection-item' key={i}>
              <h4>Notification :{card.Information}</h4>
              <br />
              <br />
            </label>
          </If>
        </div>
      );
    });
    return (
      <div>
        <h1>Cards</h1>
        <ul>
          {cardItems}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    account: store.account.data,
    fetching: store.account.fetching
  };
};

CardScreen.propTypes = {
  get: PropTypes.func,
  fetching: PropTypes.bool,
  account: PropTypes.object
};
export default connect(mapStateToProps)(CardScreen);
