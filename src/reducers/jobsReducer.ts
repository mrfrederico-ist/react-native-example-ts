import { Actions, FETCH_JOBS } from '../actions'

// types =========
export interface JobsState {
  results: object[]
}

// ===============
const INITIAL_STATE: JobsState = { results: [] }

export default (state = INITIAL_STATE, actions: Actions): JobsState => {
  switch (actions.type) {
    case FETCH_JOBS:
      return { results: actions.payload }
    default:
      return state
  }
}
