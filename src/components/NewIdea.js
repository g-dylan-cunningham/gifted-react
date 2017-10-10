import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addIdea } from '../actions/getGifts';



class NewIdea extends Component {

  render () {
    return (
      <div>
      <form
        onSubmit={e => { this.props.addIdeaAction(this.props.giftee.id,
          e.target.idea.value, e.target.notes.value
        )
        e.preventDefault();
        e.target.reset();
      }}
      >
        <div className="form-group">
          <input className="form-control" name="idea" placeholder="Gift Idea"/>
          <input className="form-control" name="notes" placeholder="Notes"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    addIdeaAction: bindActionCreators(addIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(NewIdea);
