

export default function UserReducer(initialState ={
    index:0,
    easyScore:0,
    mediumScore:0,
    hardScore:0
}, action){
    switch(action.type){
        case 'SET:Index':
            return{
                ...initialState,
                index:action.index
            }
        case 'SET:EasyScore':
            return{
                ...initialState,
                easyScore:action.score
            }
        case 'SET:MediumScore':
            return{
                ...initialState,
                mediumScore:action.score
            }  
        case 'SET:HardScore': 
            return{
                ...initialState,
                hardScore:action.score
            } 
        default:
            return initialState
    }
}