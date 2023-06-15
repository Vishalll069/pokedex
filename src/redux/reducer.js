import { DESC_POKE, GET_ALL_POKES, GET_LIMIT_POKES, HOME_ERROR, HOME_LOAD, SEARCH_ERROR, SEARCH_LOAD, SEARCH_RES, SELECTED_POKE } from "./actionType";

const initialState ={
    allPokemons : [],
    limitPoeks :[],
    isLoading : false,
    isError : '',
    searchedPoke :[],
    searchLoad:false,
    searchError:false,
    selectedPoke:[],
    pokeDesc:{}
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
        case SEARCH_RES:
            return {...state, searchedPoke:[payload], searchLoad:false, searchError:false}
        case SEARCH_LOAD:
            return {...state, searchLoad:true}
        case SEARCH_ERROR:
            return {...state, searchError:true}
        case SELECTED_POKE:
            return {...state, selectedPoke:[payload]}
        case DESC_POKE:
            return {...state, pokeDesc:payload}
        default:
            return state;
    }
}