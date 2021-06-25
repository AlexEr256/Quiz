import React from 'react'
import {connect} from 'react-redux'
import { SetEasyScore, SetMediumScore, SetHardScore } from '../../redux/actions/user';
import ActiveQuestion from '../component/ActiveQuestion';
import classes from '../question.module.css'


function Question({question, index, SetIndex, active, SetEasyScore, SetHardScore, SetMediumScore, easyScore, mediumScore, hardScore, total}){

    let [Chosen, SetChosen] = React.useState('');

    function SelectAnswer(e){
        SetChosen(e.target.value)
        
    }

    function ConfirmAnswer(idx){
        SetIndex(++idx);
        if(Chosen === question.correct_answer){
           switch(question.difficulty){
               case 'easy':
                   SetEasyScore(++easyScore);
                   break;
                case 'medium':
                    SetMediumScore(++mediumScore);
                    break;
                case 'hard':
                    SetHardScore(++hardScore);
                    break;
                default:
                    break;
           }
        }

    }

    return(
        <ActiveQuestion
            classes = {classes}
            question = {question}
            active = {active}
            index={index}
            SelectAnswer = {SelectAnswer}
            ConfirmAnswer = {ConfirmAnswer}
            Chosen = {Chosen}
            total = {total}
        />
    )
}

function mapStateToProps(state){
    return{
        easyScore: state.UserReducer.easyScore,
        mediumScore: state.UserReducer.mediumScore,
        hardScore: state.UserReducer.hardScore,
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetEasyScore: (score) => dispatch(SetEasyScore(score)),
        SetMediumScore: (score) => dispatch(SetMediumScore(score)),
        SetHardScore: (score) => dispatch(SetHardScore(score)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)