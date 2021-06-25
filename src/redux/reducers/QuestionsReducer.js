



export default function QuestionReducer(initialState={
    data:[],
    error:false,
    easyQuestions: 0,
    mediumQuestions: 0,
    hardQuestions: 0,
}, action){
    switch(action.type){
        case 'GET:Questions':
            return{
                ...initialState,
                data: action.data
            }
        case 'SET:Error':
            return{
                ...initialState,
                error: action.error
            }
        case 'GET:EasyQuestions':
            return{
                ...initialState,
                easyQuestions: action.easy
            }
        case 'GET:MediumQuestions':
            return{
                ...initialState,
                mediumQuestions: action.medium
            }
        case 'GET:HardQuestions':
            return{
                ...initialState,
                hardQuestions: action.hard
            }
        default:
            return initialState
    }
}