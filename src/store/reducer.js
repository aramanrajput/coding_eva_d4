import { ADD_JOB } from "./actiontype";

const init = {job:[]}

export const reducer = (state=init,{type,payload})=>{

    console.log(payload,type)
switch (type){
    case ADD_JOB:
        return{
            ...state,
            job:[...state.job,payload]
        }
        default:
            return state
}
}