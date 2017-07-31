import { Actions, FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from '../actions'

// types =========
export interface AuthState {
  token: string
}

// ===============
const INITIAL_STATE: AuthState = { token: '' }

export default (state = INITIAL_STATE, actions: Actions): AuthState => {
  switch (actions.type) {
    case FB_LOGIN_SUCCESS:
      return { token: actions.payload }
    case FB_LOGIN_FAIL:
      return { token: '' }
    default:
      return state
  }
}
