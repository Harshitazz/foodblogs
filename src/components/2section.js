import React, { useRef } from 'react';
import './2section.css'; 
import Card from './Card';
const Section2 = () => {
  const postsContainerRef2 = useRef(null);

  const posts = [
    
    {
        id: 1,
        title: 'Delicious Pancakes Recipe',
        caption:'Healthy food is a key to healthy life',
        date: 'January 20, 2024',
        imageUrl: 'https://www.verywellfit.com/thmb/lmZvjU1myKTaM5cMew9KnLdPv9U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/budget-bytes-Drizzle-with-Dressing-5c09748dc9e77c0001829de0.jpg' // URL of the image
      },
      {
        id: 2,
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
      {
        id: 4,
        title: 'Delicious Pancakes Recipe',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'January 20, 2024',
        imageUrl:'https://foodphotographymumbai.com/blog/wp-content/uploads/2021/09/fast-food.jpeg'
      }, {
        id: 5,
        title: 'Delicious Pancakes Recipe',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'January 20, 2024',
        imageUrl:'https://foodphotographymumbai.com/blog/wp-content/uploads/2021/09/fast-food.jpeg'
      },
    
  ];



  return (
<div className="food-blog2">
  <h2 style={{ fontFamily: 'cursive', fontStyle: 'oblique', textAlign: 'center', backgroundColor: 'rgba(33, 73, 42, 0.8)', padding: '10px', color: 'white' }}>Recent blogs</h2>
 
  <div className="posts-container2 "  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px', justifyContent: 'center' }} ref={postsContainerRef2}>
    {posts.map(post => (
      <div key={post.id}  >
        <Card>
        <div className="post-image2">
          <img src={post.imageUrl} alt={post.title} />
          
        </div>
        <div className="post-content2">
            <h2>{post.title}</h2>
            <p><em>{post.caption}</em></p>
          </div>
        </Card>
      </div>
    ))}
  </div>
</div>

  );
};

export default Section2;
