import { Job } from '../screens/DeckScreen'
import { Actions, FETCH_JOBS } from '../actions'

const INITIAL_STATE: Job[] = []

export default (state = INITIAL_STATE, actions: Actions) => {
  switch (actions.type) {
    case FETCH_JOBS:
      return actions.payload
    default:
      return state
  }
}
