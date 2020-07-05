import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import RedComponent from '../components/Red'
import { AllState } from '../store';
import { updateTime } from '../actions/red';

const mapStateToProps = (state: AllState) => ({
  red: state.red,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AllState, undefined, Action>) => ({
  onUpdateTime: () => dispatch(updateTime()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedComponent)
