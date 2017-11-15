import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import LifeCell from './LifeCell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../Actions/index';

class LifeContainer extends Component {
  constructor(props) {
    super(props);

    const rows = [];
    for (let row = 0; row < this.props.life.grid.rows; row++) {
      rows.push(row)
    }

    const cols = [];
    for (let col = 0; col < this.props.life.grid.cols; col++) {
      cols.push(col)
    }

    this.rows = rows;
    this.cols = cols;

    this.determineStatus = this.determineStatus.bind(this);
  }

  determineStatus(row, col) {
    let status = {
      style: 'dead',
      index: null
    };

    this.props.life.alive.forEach((pair, index) => {
      if (pair.row === row && pair.col === col) {
        status = {
          style: 'alive',
          index: index
        }
      }
    });

    return status;
  }

  componentDidUpdate() {
    if (this.props.life.simulation) {
      setTimeout(() => this.props.tick(), 100);
    }
  }

  render() {
    const rowStyle = {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%'
    }

    return(
      <Container>
        <Container>
        <div className="ui label">
          tick: {this.props.life.tick}
        </div>
          {this.rows.map((row, rIndex) => {
            return (
              <div style={rowStyle} key={rIndex}>
                {this.cols.map((col, cIndex)  => {
                  return(
                      <LifeCell row={rIndex} col={cIndex} key={cIndex} status={this.determineStatus(rIndex, cIndex)}/>
                  );
                })}
              </div>);
          })}
        </Container>
        <button className="ui basic button" onClick={e => {
          e.preventDefault();
          this.props.tick();
        }}>
          Tick
        </button>
        <button className="ui basic button" onClick={e => {
          e.preventDefault();
          this.props.startSimulation();
        }}>
          Start
        </button>
        <button className="ui basic button" onClick={e => {
          e.preventDefault();
          this.props.stopSimulation();
        }}>
          Stop
        </button>
        <button className="ui basic button" onClick={e => {
          e.preventDefault();
          this.props.clear();
        }}>
          Clear
        </button>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    life: state.life
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeContainer);