import { AnyAction, Reducer } from 'redux';
import { FETCH } from 'store/itemsActions';

const initial = [{ id: 'item1' }];

const reducer: Reducer = (state: any = initial, action: AnyAction) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        items: [...action.payload.data],
      };
    default:
      return state;
  }
};

export default reducer;
