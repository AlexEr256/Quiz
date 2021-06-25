import React from 'react'


export default function ActiveQuestion({classes, question, active, index, SelectAnswer, ConfirmAnswer, Chosen, total}){
    return(
        <div className ={classes.questionWrapper}>          
        <div className={classes.questionExtra}>
            <span>Difficulty: {question.difficulty}</span>
            <span>Category: {question.category}</span>
            <span>{active+1} from {total}</span>
        </div>
        <h2 className={classes.questionName}>{question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</h2>

        <div className={classes.questionAnswers}>
            <div>
                <input checked={Chosen === question.correct_answer} onChange = {(e) => SelectAnswer(e)} type={question.type === 'boolean'? "radio" : "checkbox"} id="correct" name='answers' value={question.correct_answer}></input>
                <label htmlFor="correct">{question.correct_answer.replace(/&quot;/g, '"')}</label>
            </div>
            {question.incorrect_answers.map((answer, i) =>{
                return(
                <div key={i} >
                    <input checked={Chosen === answer} onChange = {(e) => SelectAnswer(e)} type= {question.type === 'boolean'? "radio" : "checkbox"} name='answers' id={i} value={answer}></input>
                    <label htmlFor={i}>{answer.replace(/&quot;/g, '"')}</label>
                </div>
                )
            })}
        </div>
        <button  disabled={!Chosen.length ? true : false } className={classes.nextQuestion} onClick={() => ConfirmAnswer(index)}>Next Question</button>
    </div>
    )
}