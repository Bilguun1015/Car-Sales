import React from 'react';
import {connect} from 'react-redux';

import {addNewFeature} from '../actions'

const AdditionalFeature = props => {

  const addFeature = () => {
    props.addNewFeature(props.feature.name, props.feature.price)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return{

  }
}
export default connect(mapStateToProps, {addNewFeature})(AdditionalFeature);
