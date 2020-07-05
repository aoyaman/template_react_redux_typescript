import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import AppComponent from '../components/App'
import { AllState } from '../store';
import { togglePage } from '../actions/app';

const mapStateToProps = (state: AllState) => ({
  app: state.app,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AllState, undefined, Action>) => ({
  onTogglePage: () => dispatch(togglePage()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
