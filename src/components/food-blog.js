import React, { useRef ,useState} from 'react';
import './FoodBlog.css'; 
import Section2 from './2section';
import { Link } from 'react-router-dom';
const FoodBlog = () => {
  const postsContainerRef = useRef(null);
  const [showNewPost, setShowNewPost] = useState(false);

  const handleAddPostClick = () => {
    setShowNewPost(true);
  };
  
  const posts = [
    
    {
        id: 1,
        title: 'Delicious Pancakes Recipe',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'January 20, 2024',
        imageUrl: 'https://www.verywellfit.com/thmb/lmZvjU1myKTaM5cMew9KnLdPv9U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/budget-bytes-Drizzle-with-Dressing-5c09748dc9e77c0001829de0.jpg' // URL of the image
      },
      {
        id: 1,
        title: 'Delicious Pancakes Recipe',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'January 20, 2024',
        imageUrl:'https://foodphotographymumbai.com/blog/wp-content/uploads/2021/09/fast-food.jpeg'
      },
      {
        id: 3,
        title: 'Delicious Pancakes Recipe',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'January 20, 2024',
        imageUrl: 'https://fandbrecipes.com/wp-content/uploads/2021/02/cristina-matos-albers-S4dXp25NiLg-unsplash-scaled.jpg' // URL of the image
      },
    
  ];

  const scrollLeft = () => {
    if (postsContainerRef.current) {
      postsContainerRef.current.scrollLeft -= 200; 
    }
  };

  const scrollRight = () => {
    if (postsContainerRef.current) {
      postsContainerRef.current.scrollLeft += 200; 
    }
  };

  return (
    <div>
    
      <div className="icon-container">
      <Link to={'/add'}><button className="add-post-button" onClick={handleAddPostClick} ><i className="fa fa-plus fa-solid fa-lg" ></i></button></Link>
      <div className="popup">add your post</div>
    </div>

    <div className="food-blog">
        <h2 style={{fontFamily:'cursive',fontStyle:'oblique',textAlign:'center',backgroundColor:'rgba(65, 35, 68, 0.8)',padding:'10px',color:'white'}}>Top Food blogs</h2>
      <div className="posts-container" ref={postsContainerRef}>
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-image">
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-content">
                <h2>{post.title}</h2>
                <p><em>Published on {post.date}</em></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="next-arrow" onClick={scrollRight}>
        <span><i class="fa-solid fa-lg fa-angles-right"></i></span>
      </div>
      <div className="next-arrow" style={{ left: 0 }} onClick={scrollLeft}>
        <span><i class="fa-solid fa-lg fa-angles-left"></i></span>
      </div>
    </div>
    <Section2/>
    </div>
  );
};

export default FoodBlog;
