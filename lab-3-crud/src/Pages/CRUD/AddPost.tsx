import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useBlogContext } from '../../Context/BlogContext'

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  const { dispatch } = useBlogContext()

  const handleSubmit = () => {
    const newPost = {
      id: uuidv4(),
      title,
      content,
      published: true
    }
    dispatch({ type: 'ADD', payload: newPost })
    navigate('/blog')
  }

  return (
    <div>
      <h1 className="font-bold text-lg mb-2">Add New Post</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        className="border p-2 mb-2 w-full"
        placeholder="Content"
      />
      <button
        onClick={handleSubmit}
        className="border p-2 bg-white hover:bg-black hover:text-white transition-colors"
      >
        Submit
      </button>
    </div>
  )
}
export default AddPost
