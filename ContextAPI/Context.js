import { useEffect, useContext, createContext, useReducer } from 'react';
import { client } from '../utils/client';
import { fetchCategoriesQuery } from '../utils/query';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const SET_USER_SANITY = 'SET_USER_SANITY';
const SET_USER_GOOGLE = 'SET_USER_GOOGLE';
const SET_CATEGORIES = 'SET_CATEGORIES';

const initialState = {
  userSanity: [],
  userGoogle: [],
  categories: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case SET_USER_SANITY:
      return { ...state, userSanity: action.payload };
    case SET_USER_GOOGLE:
      return { ...state, userGoogle: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(localStorage.getItem('profileObj')) {
      getUserData();
      getCategories();
    }
  }, []);

  const setCategories = payload => dispatch({ type: SET_CATEGORIES, payload });
  const setUserGoogle = payload => dispatch({ type: SET_USER_GOOGLE, payload });
  

  const getUserData = () => {
    setUserGoogle(JSON.parse(localStorage.getItem('profileObj')));
  }

  const getCategories = () => {
    client.fetch(fetchCategoriesQuery())
    .then(res => setCategories(res))
    .catch(err => console.log(err.message));
  }

  return (
    <AppDispatchContext.Provider value={{ getUserData, getCategories }}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useStateContext = () => useContext(AppStateContext);
export const useDispatchContext = () => useContext(AppDispatchContext);