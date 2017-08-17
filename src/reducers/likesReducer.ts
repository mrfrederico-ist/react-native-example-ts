import * as _ from 'lodash'

import { Job } from '../screens/DeckScreen'
import { Actions, LIKE_JOB } from '../actions'

const INITIAL_STATE: Job[] = []

export default (state = INITIAL_STATE, actions: Actions) => {
  switch (actions.type) {
    case LIKE_JOB:
      return _.uniqBy([ actions.payload, ...state ], 'jobkey')
    default:
      return state
  }
}
