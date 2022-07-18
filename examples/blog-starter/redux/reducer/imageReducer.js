const initialState = {
  images: '',
}
export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return (state.images = action.payload)

    default:
      return state
  }
}
