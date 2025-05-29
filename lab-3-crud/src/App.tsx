import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BlogList from './Pages/Blog/BlogListing'
import BlogDetail from './Pages/Blog/BlogDetail'
import AddPost from '../src/Pages/CRUD/AddPost'
import EditPost from '../src/Pages/CRUD/EditPost'
import Header from './components/Header'
import Footer from './components/Footer'
import { BlogProvider } from './Context/BlogContext'
import { Toaster } from 'react-hot-toast'

const App = () => (
  <BlogProvider>
    <BrowserRouter>
      <Header firstname="Justin Perdomo" />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/new" element={<AddPost />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/edit/:id" element={<EditPost />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </BrowserRouter>
  </BlogProvider>
)

export default App
