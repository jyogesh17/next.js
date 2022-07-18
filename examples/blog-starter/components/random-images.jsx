import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadImages } from '../redux/actions/loadImages'

const RandomImage = () => {
  const [singleImage, setSingleImage] = useState('')
  const [randomNo, setRandom] = useState('')

  // action dispatch function
  const dispatch = useDispatch()
  const allData = useSelector((state) => state.allImages)

  const getRandomImage = () => {
    let random = Math.floor(Math.random() * allData.length)
    setRandom(random)
  }

  const setImage = useMemo(() => {
    return setSingleImage(allData[randomNo]?.url)
  }, [randomNo])

  useEffect(() => {
    dispatch(loadImages())
  }, [])

  useEffect(() => {
    if (allData) {
      setSingleImage(allData[0]?.url)
    }
  }, [allData])

  return (
    <>
      <div className="h-[300px] w-[300px] m-auto bg-slate-300 mt-10 mb-5">
        <img src={singleImage} alt="Random Image" />
      </div>
      <button
        type="button"
        className="bg-slate-300 m-auto block mb-10 px-5 py-3 hover:bg-slate-200"
        onClick={getRandomImage}
      >
        Change Image
      </button>
    </>
  )
}

export default RandomImage
