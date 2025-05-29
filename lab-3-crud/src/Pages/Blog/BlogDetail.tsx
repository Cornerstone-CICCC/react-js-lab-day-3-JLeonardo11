import { useBlogContext } from '../../Context/BlogContext'
import { useParams, useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state, dispatch } = useBlogContext()
  const post = state.find((p: any) => p.id === id)
 
  if (!post) return <p>Loading...</p>

  const handleDelete = () => {
    dispatch({ type: 'DELETE', payload: id })
    toast.success('Post deleted!')
    navigate('/blog')
  }

  return (
    <div>
      <h1 className="font-bold text-lg">{post.title}</h1>
      <p className="italic mb-2">{post.content}</p>
      <div className="space-x-2">
        <Link
          to={`/blog/edit/${post.id}`}
          className="border p-2 bg-white hover:bg-black hover:text-white transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="border p-2 bg-white hover:bg-black hover:text-white transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogDetail
