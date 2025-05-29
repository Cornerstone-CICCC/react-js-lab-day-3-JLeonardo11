import { createContext, useReducer, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { Post } from '../types/post.types'

const BlogContext = createContext<any>(null)

const reducer = (state: Post[], action: any): Post[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'EDIT':
      return state.map(post => post.id === action.payload.id ? action.payload : post)
    case 'DELETE':
      return state.filter(post => post.id !== action.payload)
    default:
      return state
  }
}

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext)