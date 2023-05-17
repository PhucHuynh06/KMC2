import * as moviesConstants from "../Constants/MoviesConstants.js";
import * as moviesAPIs from "../APIs/MoviesServices.js";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../protection.js";

//Get all movies action
export const getAllMoviesAction = ({
    category="",
    time="",
    language="",
    rate="",
    year="",
    search="",
    pageNumber="",
}) => async(dispatch) =>{
    try{
        dispatch({type:moviesConstants.MOVIES_LIST_REQUEST})
        const response = await moviesAPIs.getAllMoviesService(
            category, time, language, rate, year, search, pageNumber,
        )
        dispatch({type:moviesConstants.MOVIES_LIST_SUCCESS, 
                payload: response,});
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
    }
};

//get random movies action
export const getRandomMoviesAction = () => async (dispatch) =>{
    try{
        dispatch({ type: moviesConstants.MOVIES_RANDOM_REQUEST});
        const response = await moviesAPIs.getRandommoviesService();
        dispatch({
            type: moviesConstants.MOVIES_RANDOM_SUCCESS,
            payload: response,
        });
    } catch(error){
        ErrorsAction(error, dispatch, moviesConstants.MOVIES_RANDOM_FAIL);
    }
};

//get movie by id action
export const getMovieByIdAction = (id) => async (dispatch) =>{
    try{
        dispatch({ type: moviesConstants.MOVIES_DETAILS_REQUEST});
        const response = await moviesAPIs.getMovieByIdService(id);
        dispatch({ type: moviesConstants.MOVIES_DETAILS_SUCCESS,
                    payload: response,});
    }catch (error){
        ErrorsAction( error, dispatch, moviesConstants.MOVIES_DETAILS_FAIL);
    }
};

//get top rated movie action
export const getTopRatedMovieAction = () => async (dispatch) =>{
    try{
        dispatch({ type: moviesConstants.MOVIE_TOP_RATED_REQUEST});
        const response = await moviesAPIs.getTopRatedMovieService();
        dispatch({
            type: moviesConstants.MOVIE_TOP_RATED_SUCCESS,
            payload: response,
        });
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.MOVIE_TOP_RATED_FAIL);
    }
};