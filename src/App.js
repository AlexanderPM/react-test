import './App.css';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initFunction, updateInputOneFunction, updateInputTwoFunction } from './actions'
import AppHeader from './Components/AppHeader';
import AppHeaderText from './Components/AppHeaderText';
import AppMain from './Components/AppMain';

function App(props) {

  return (
    <div className="App">
      <AppHeader />
      <AppHeaderText />
      <AppMain state={props.state} 
      initFunction={props.initFunction} 
      updateInputOneFunction={props.updateInputOneFunction}
      updateInputTwoFunction={props.updateInputTwoFunction}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initFunction: bindActionCreators(initFunction, dispatch),
    updateInputOneFunction: bindActionCreators(updateInputOneFunction, dispatch),
    updateInputTwoFunction: bindActionCreators(updateInputTwoFunction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


