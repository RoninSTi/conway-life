import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCell } from '../Actions/Life';

class LifeCell extends Component {
  render() {
    return(
      <div className={`cell ${this.props.status.style}`} onClick={e => {
        e.preventDefault();
        this.props.onClick();
      }} />
    )
  }
}

function mapStateToProps(state) {
  return {
    life: state.life
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleCell(ownProps.row, ownProps.col, ownProps.status));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeCell);