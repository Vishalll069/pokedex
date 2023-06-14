import { GET_ALL_POKES, GET_LIMIT_POKES, HOME_ERROR, HOME_LOAD } from "./actionType";

const initialState ={
    allPokemons : [],
    limitPoeks :[],
    isLoading : false,
    isError : ''
}

export const reducer =(state = {...initialState} , action)=>{
    const {type, payload} = action;

    switch(type){
        case GET_ALL_POKES:
            return {...state, allPokemons:payload, isLoading:false};
        case HOME_LOAD:
            return {...state, isLoading:payload};
        case HOME_ERROR:
            return {...state, isError:payload};
        default:
            return state;
    }
}