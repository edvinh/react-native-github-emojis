import * as API from './api/Emojis'
import * as types from '../constants/Emojis'

export function getEmojis () {
  return (dispatch) => {
    dispatch({
      type: types.GET_EMOJIS,
    })
    API.getEmojis()
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: types.GET_EMOJIS_SUCCESS,
        payload: json,
      })
    })
    .catch((err) => {
      dispatch({
        type: types.GET_EMOJIS_FAIL,
        payload: err,
      })
    })
  }
}
