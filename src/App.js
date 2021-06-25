import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import GetQuestionsThunk from './redux/actions/questions';

import Questions from './questions/questions'
import Statistics from './statistics/container/statistics';


function App({GetQuestions, questions, SetIndex, active}) {

  React.useEffect(() =>{
    GetQuestions(`https://opentdb.com/api.php?amount=10`);
  }, [])
 
  return (
    <div className="App">
      {active === questions.length ?
        <Statistics/>
      :  
        <Questions
            active = {active}
            SetIndex = {SetIndex}
            questions = {questions}/>
}
    </div>
  );
}

function mapStateToProps(state){
  return{
      questions: state.QuestionReducer.data,
      active: state.UserReducer.index,
  }
}

function mapDispatchToProps(dispatch){
  return{
    GetQuestions: (url) => dispatch(GetQuestionsThunk(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
