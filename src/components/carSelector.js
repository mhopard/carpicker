// Displays cars created in carAdder and deletes selected cars 

import React, { Component } from 'react';
import CarAdder from './carAdder';
import { connect } from 'react-redux';

class CarSelector extends Component {

  handleClick = (model) => {
    this.props.deleteCar(model)
  }

  render() {
    const { cars } = this.props
    return (
      <div className="collection">
        <CarAdder cars={cars} handleClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      deleteCar: (model) => { dispatch({type: 'DELETE_CAR', model}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarSelector)
