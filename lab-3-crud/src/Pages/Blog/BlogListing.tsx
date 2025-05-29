import { useState, useEffect } from "react"
import type { Post } from "../../types/post.types"
import { Link } from "react-router-dom"

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()
      setPosts(data)
    }
    getPosts()
  }, [])

  return (
    <>
      <h1 className="font-bold text-2xl mb-3">Blog</h1>
      <section>
        {posts?.map(post => (
          <article key={post.id} className="border-b py-2">
            <Link to={`/blog/${post.id}`} className="underline text-sm">
              {post.title}
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

export default BlogList