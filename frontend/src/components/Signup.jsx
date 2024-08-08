// src/BlogCard.js
import React, { useState } from 'react';
import './Signup.css';
import img from './assets/second img.png'
import image from './assets/Article_Image.png'
import profileimg from './assets/logo.jpeg.jpg'


const BlogCard = ({ title, content, imageUrl, profileImageUrl, author }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };
 

  const handleShare = () => {
    alert('Post shared!');
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, commentText]);
    setCommentText('');
  };

  return (
    <div className='bodycard'>
        <div className='body' style={{display:'flex'}}>
    <div className ="blog-card">
      <img src={img} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <div>
            
          </div>
        </div>
        
      </div>
    
    </div>
    
    <div className="blog-card" >
      <img src={image} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    
    </div>
    <div className="blog-card">
      <img src={img} style={{width:'400px'}}alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    
    </div>
    
    </div>
    
    <div style={{display:'flex'}}>
    <div className ="blog-card">
      <img src={image} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    <div className ="blog-card">
      <img src={img} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    <div className ="blog-card">
      <img src={image} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    <div>
        
    </div>
    </div>
    <div style={{display:'flex'}}>
    <div className ="blog-card">
      <img src={img} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    <div className ="blog-card">
      <img src={image} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    <div className ="blog-card">
      <img src={img} style={{width:'400px'}} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="author-info">
          <img src={profileimg} alt={author} className="profile-image" />
          <span className="author-name">{author}</span>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="blog-actions">
          <button onClick={handleLike} className="like-button">❤️ {likes}</button>
          <button onClick={handleShare} className="share-button">🔗 Share</button>
        </div>
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
    </div>
    <div className="footer">
        
    <span>
      <h2 className="training">Training </h2>
      <h2 className="bblog">Blog</h2>
    </span>
    <div className="content">
      <p>
        Welcome to our technical blog, where we delve into the world of
        cutting-edge technologies and explore their practical applications.
      </p>
      <h1> CATEGORY</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>VSCODE</li>
      </ul>
    </div>
    <div className="touch">
      <h1> GET IN TOUCH</h1>
      <p>+91-8XXX-XXX-XX</p>
      <p>Demo@gmail.com</p>
    </div>
    <div className="follow">
      <h1>FOLLOW US ON</h1>
    </div>
    <div className="icon3">
      <i className="fa-brands fa-twitter" />
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-linkedin-in" />
    </div>
    <div className="horizontal_line">
      <hr style={{ borderTop: "2px solid rgba(231, 234, 242, 1)" }} />
      <p>© 2023 TRAININGBLOG</p>
      <p className="mohali">MADE WITH ❤️ MOHALI, INDIA</p>
    </div>
  </div>
  </div>


    
    
    

    
  );
};


export default BlogCard;
