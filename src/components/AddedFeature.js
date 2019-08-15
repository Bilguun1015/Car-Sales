import React from 'react';
import {connect} from 'react-redux';
import {removeAddedFeature} from '../actions'

const AddedFeature = props => {
  const removeFeature = id => {
    //console.log(id)
    props.removeAddedFeature(id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> removeFeature(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return{
  }
}
export default  connect(mapStateToProps, {removeAddedFeature})(AddedFeature);
