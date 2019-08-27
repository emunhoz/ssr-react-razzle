export const Types = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT'
}

// Reducer

const initialState = {
  count: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return {
        count: state.count + 1
      }
    case Types.DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

// Action Creators

export function increase () {
  return {
    type: Types.INCREMENT
  }
}

export function decrease () {
  return {
    type: Types.DECREMENT
  }
}
