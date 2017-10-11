import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGiftee } from '../actions/getGiftees';
import AddGifteeForm  from './AddGifteeForm';


class AddGiftee extends Component {




  render () {
    return (
      <div>


        <h4>Add a new giftee</h4>
        <AddGifteeForm />




      </div>
    )
  }
}
//
//


function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    addGifteeAction: bindActionCreators(addGiftee, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(AddGiftee);
