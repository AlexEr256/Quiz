import axios from 'axios'

export function GetQuestions(data){
    return{
        type:'GET:Questions',
        data
    }
}

export function SetError(error){
    return{
        type:'SET:Error',
        error
    }
}

export function GetEasyQuestions(easy){
    return{
        type:'GET:EasyQuestions',
        easy
    }
}

export function GetMediumQuestions(medium){
    return{
        type:'GET:MediumQuestions',
        medium
    }
}

export function GetHardQuestions(hard){
    return{
        type:'GET:HardQuestions',
        hard
    }
}


export default function GetQuestionsThunk(url){
    return (dispatch) =>{
        axios.get(url)
        .then((response) =>{
            dispatch(GetQuestions(response.data.results));
        })
        .catch((error) =>{
            dispatch(SetError(error));
        })
    }
}