import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log(props.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    additionalPrice : state.additionalPrice,
    carPrice: state.car.price,
  }
}

export default connect(mapStateToProps, {})(Total);
