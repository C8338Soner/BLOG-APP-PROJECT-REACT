import React from 'react';
import {useContext} from 'react';
import {BlogContext} from '../context/BlogContext';
import Post from '../components/Post';


const Posts = () => {
  const { posts, category } = useContext(BlogContext);
  return (
    <div className = 'd-flex flex-raw container flex-wrap'>
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts
