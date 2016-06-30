import * as types from '../constants/Emojis'

const initialState = {
  emojis: {},
  loading: false,
  error: false,
}

export default function emojiReducer (state = initialState, action) {
  switch (action.type) {
  case types.GET_EMOJIS:
    return {
      ...state,
      loading: true,
    }
  case types.GET_EMOJIS_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      emojis: action.payload,
    }
  case types.GET_EMOJIS_FAIL:
    return {
      ...state,
      loading: false,
      error: true,
    }
  default:
    return {...state}
  }
}
