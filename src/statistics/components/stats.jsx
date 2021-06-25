import React from 'react'

export default function Stats({classes, EasyCorrectAnswers,MediumCorrectAnswers, HardCorrectAnswers,
                            EasyQuestions, MediumQuestions, HardQuestions, Refresh}){
    return(
        <div className ={classes.stats}>
            <h2 className={classes.greetings}>Congratulations! Your scores:</h2>
            <span className={classes.total}>Easy: {EasyCorrectAnswers}/{EasyQuestions}</span>
            <span className={classes.total}>Medium: {MediumCorrectAnswers}/{MediumQuestions}</span>
            <span className={classes.total}>Hard: {HardCorrectAnswers}/{HardQuestions}</span>
            <button onClick={Refresh} className={classes.refreshBtn}>Pass Quiz again!</button>
        </div>
    )
}