import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Link from 'next/link'

const NewPost = () => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        New Post
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <Link href={'/posts/new-blog-post'}>
          <h1 className="text-3xl cursor-pointer">Another Blog Post</h1>
        </Link>
      </div>
    </section>
  )
}

export default NewPost
