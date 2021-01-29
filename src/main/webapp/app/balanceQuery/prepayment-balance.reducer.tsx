import axios from 'axios';
import { ICrudGetAllAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IPrepaymentBalance, defaultValue } from './prepayment-balance.model'

export const ACTION_TYPES = {
  FETCH_PREPAYMENTENTRY_LIST: 'prepaymentEntry/FETCH_PREPAYMENTENTRY_LIST',
  RESET: 'prepaymentEntry/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IPrepaymentBalance>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type PrepaymentBalanceState = Readonly<typeof initialState>;

// Reducer

export default (state: PrepaymentBalanceState = initialState, action): PrepaymentBalanceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PREPAYMENTENTRY_LIST):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PREPAYMENTENTRY_LIST):
    case SUCCESS(ACTION_TYPES.FETCH_PREPAYMENTENTRY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/app/prepayment-balance';

// Actions

export const getEntities: ICrudGetAllAction<IPrepaymentBalance> = (balanceDate) => {
  const requestUrl = `${apiUrl} ?balanceDate=${balanceDate}: ''}`;
  return {
    type: ACTION_TYPES.FETCH_PREPAYMENTENTRY_LIST,
    payload: axios.get<IPrepaymentBalance>(`${requestUrl} '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});