export const loadImages = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'LOAD_IMAGES',
          payload: data,
        })
      )
  }
}
