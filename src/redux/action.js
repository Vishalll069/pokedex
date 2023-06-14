import axios from "axios";
import { GET_ALL_POKES, GET_LIMIT_POKES, HOME_ERROR, HOME_LOAD } from "./actionType";

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


export {getAllPokes }
