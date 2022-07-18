import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'

const NewBlogPost = () => {
  const [getPost, setPost] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [])

  return (
    <section>
      <div className="singlePost">
        {getPost
          ? getPost.map((item) => {
              return (
                <div className="oneItem" key={item.id}>
                  <h2 className="title">{item.title}</h2>
                </div>
              )
            })
          : 'No posts available'}
      </div>
    </section>
  )
}

export default NewBlogPost
