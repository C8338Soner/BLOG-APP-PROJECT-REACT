import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {BlogContext} from '../context/BlogContext'




const Post = ({post}) => {
    const history = useHistory();
    const { setBlogInfo, islogin } = useContext(BlogContext);
    const handleClick = () => {
      setBlogInfo(post);
      islogin ? history.push('/detail') : history.push('/login');
    };
 console.log(post);
 return (
   <div>
     <div className='card '>
       <h2 className='card-title'>{post.category}</h2>
       <img
         src={post.image}
         className='card-img-top'
         alt='...'
         onClick={handleClick}
       />
       <div className='card-body'>
         <h5 className='card-title'>{post.title}</h5>
         <p className='card-text'>{post.content}</p>
       </div>
       <ul className='list-group list-group-flush'>
         <li className='list-group-item'>{post.publish_date}</li>
         <li className='list-group-item'>{post.author}</li>
       </ul>
       <div className='card-body'>
         <a href='#' className='card-link'>
           Card link
         </a>
         <a href='#' className='card-link'>
           Another link
         </a>
       </div>
     </div>
   </div>
 );
}

export default Post
