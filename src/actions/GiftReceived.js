import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import UpdateIdea from './UpdateIdea';
import {Collapse} from 'react-collapse';


class GiftReceived extends Component {
  state = {
    expanded: false
  }


  expansion() {
    this.setState({expanded: !this.state.expanded})
  }



  render () {


    let gift = this.props.gift;
    return (
      <div>


        <ul>
          <li><p className="giftIdeaTitle">{gift.idea}</p></li>
          <p className="giftIdeaNotes">{gift.idea_notes}</p>
          <div className="updateExpander" onClick={() => this.expansion()}>
            Update Gift Idea asdfasdfasdfasdfasdf
          </div>
          <div>
            <Collapse
              isOpened={this.state.expanded}
            >
              <UpdateIdea giftee={this.props.giftee} gift={gift}/>
            </Collapse>
          </div>
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//
//
//   }
// }
export default connect(mapStateToProps, null)(GiftReceived);