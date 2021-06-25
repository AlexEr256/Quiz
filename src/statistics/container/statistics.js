import React from 'react';
import {connect} from 'react-redux'
import { GetEasyQuestions, GetHardQuestions, GetMediumQuestions } from '../../redux/actions/questions';
import getNumberofEachKind from '../helpers/getNumberOfEach'
import Stats from '../components/stats';
import classes from '../statistics.module.css'



 function Statistics({EasyCorrectAnswers, MediumCorrectAnswers, HardCorrectAnswers,
                    EasyQuestions, MediumQuestions, HardQuestions, GetEasy, GetMedium,
                    GetHard, questions}){

    function Refresh(){
        window.location.reload();
    }

    React.useEffect(() =>{
        getNumberofEachKind(questions, GetEasy, GetMedium, GetHard);
    })

    return(
        <Stats
            classes={classes}
            EasyCorrectAnswers={EasyCorrectAnswers}
            MediumCorrectAnswers={MediumCorrectAnswers}
            HardCorrectAnswers={HardCorrectAnswers}
            EasyQuestions={EasyQuestions}
            MediumQuestions={MediumQuestions}
            HardQuestions={HardQuestions}
            Refresh = {Refresh}
        />
    )
}

function mapStateToProps(state){
    return{
        questions: state.QuestionReducer.data,

        EasyCorrectAnswers: state.UserReducer.easyScore,
        MediumCorrectAnswers: state.UserReducer.mediumScore,
        HardCorrectAnswers: state.UserReducer.hardScore,

        EasyQuestions: state.QuestionReducer.easyQuestions,
        MediumQuestions: state.QuestionReducer.mediumQuestions,
        HardQuestions: state.QuestionReducer.hardQuestions,

    }
}

function mapDispatchToProps(dispatch){
    return{
        GetEasy: (easy) =>dispatch(GetEasyQuestions(easy)),
        GetMedium: (medium) =>dispatch(GetMediumQuestions(medium)),
        GetHard: (hard) =>dispatch(GetHardQuestions(hard)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Statistics)