import React from 'react'
import { connect } from "react-redux"
import {ActiveQuestion} from "../redux/actions/user"

import Question from "../question/container/question"


function Questions({active, SetIndex, questions}){
    return( 
    <React.Fragment>
        {questions && questions.map((question, index) =>{
            return(
                index === active ?
                    <Question 
                        key={Math.random().toString()}
                        active={active}
                        index={index}
                        question={question}
                        SetIndex={SetIndex}
                        total={questions.length}/>
                :
                    null
            )

        })}
    </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        active: state.UserReducer.index
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetIndex: (index) => dispatch(ActiveQuestion(index)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Questions)