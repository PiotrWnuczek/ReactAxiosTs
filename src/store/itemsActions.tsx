import axios from 'axios';
import { AppDispatch } from 'index';

export const FETCH = 'FETCH';

export const fetchItems = () => (dispatch: AppDispatch) => {
  return axios
    .get('localhost:5000/GetItems')
    .then(({ data }) => {
      dispatch({ type: FETCH, payload: { data } });
    })
    .catch(err => console.log(err));
};
