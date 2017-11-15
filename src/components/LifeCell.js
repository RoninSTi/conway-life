import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCell } from '../Actions/Life';

class LifeCell extends Component {
  render() {
    const color = this.props.status.style === 'alive' ? 'salmon':'black';
    const cellStyle = {
        width: '5%',
        paddingBottom: '5%',
        display: 'table-cell',
        border: '1px solid white',
        backgroundColor: color
    }
    return(
      <div style={cellStyle} onClick={e => {
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