export function ActiveQuestion(index){
    return{
        type:'SET:Index',
        index
    }
}

export function SetEasyScore(score){
    return{
        type:'SET:EasyScore',
        score
    }
}

export function SetMediumScore(score){
    return{
        type:'SET:MediumScore',
        score
    }
}
export function SetHardScore(score){
    return{
        type:'SET:HardScore',
        score
    }
}


