import Header from './Header'
import BlogCard from './Signup'

const App = () => {
    return (
        <>
            <div>
                <Header/>
                <BlogCard
                title="My First Blog Post"
                content="This is the content of the blog post."
                author="John Doe"
                />
            </div>
        </>
    )
  }
  
  export default App
  