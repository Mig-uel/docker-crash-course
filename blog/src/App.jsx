import { useEffect, useState } from 'react'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  })

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>All Blogs</h1>

        {blogs && blogs.map((blog) => <div key={blog.id}>{blog.title}</div>)}
      </header>
    </div>
  )
}

export default App
