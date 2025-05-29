import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBlogContext } from '../../Context/BlogContext'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state, dispatch } = useBlogContext()
  const post = state.find((p: any) => p.id === id)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
    }
  }, [post])

  const handleSubmit = () => {
    dispatch({ type: 'EDIT', payload: { ...post, title, content } })
    navigate(`/blog/${id}`)
  }

  if (!post) return <p>Post not found</p>

  return (
    <div>
      <h1 className="font-bold text-lg mb-2">Edit Post</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="border p-2 bg-white hover:bg-black hover:text-white transition-colors"
      >
        Save
      </button>
    </div>
  )
}

export default EditPost