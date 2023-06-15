import axios from "axios";
import { DESC_POKE, GET_ALL_POKES, GET_LIMIT_POKES, HOME_ERROR, HOME_LOAD, SEARCH_ERROR, SEARCH_LOAD, SEARCH_RES, SELECTED_POKE } from "./actionType";

const getAllPokes = (res) => {
  return (dispatch) => {
    let allPokes = [];
    dispatch({type:HOME_LOAD, payload:true})
    try {
      res.map(async (pokemonItem) => {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`
        );
        allPokes.push(result.data);
        dispatch({type:GET_ALL_POKES, payload:allPokes});
      });
    } catch (error) {
      dispatch({type:HOME_ERROR, payload:error})
      console.log(error);
    }
  };
};

const searchAction = (searchIn) => {
  return (dispatch) => {
    try {
      if(searchIn){
        dispatch({ type: SEARCH_LOAD });
        axios
          .get(
            `https://pokeapi.co/api/v2/pokemon/${searchIn}`
          )
          .then((res) => {
            dispatch({ type: SEARCH_RES, payload: res.data });
          });

      }
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };
};


const getPokemonDets =(name)=>{
  return (dispatch) => {
    try {
        axios
          .get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          )
          .then((res) => {
            dispatch({ type: SELECTED_POKE, payload: res.data });
          });
    } catch (error) {
      console.log(error)
      // dispatch({ type: SEARCH_ERROR });
    }
  };
}

const getPokeDesc =(name)=>{
  return (dispatch)=>{
    try {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon-species/${name}`
        )
        .then((res) => {
          dispatch({ type: DESC_POKE, payload: res.data });
        });
  } catch (error) {
    console.log(error)
    // dispatch({ type: SEARCH_ERROR });
  }
  }
}


export {getAllPokes, searchAction, getPokemonDets, getPokeDesc }
