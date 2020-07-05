import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import BlueComponent from '../components/Blue'
import { AllState } from '../store';
import { incrementBlue, decrementBlue } from '../actions/blue';

const mapStateToProps = (state: AllState) => ({
  blue: state.blue,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AllState, undefined, Action>) => ({
  onIncrement: () => dispatch(incrementBlue()),
  onDecrement: () => dispatch(decrementBlue()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlueComponent)
