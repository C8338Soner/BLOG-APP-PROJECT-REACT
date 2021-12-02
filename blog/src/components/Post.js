import React from 'react'

const Post = (post) => {
 console.log(post);
 return (
   <div>
     <div className='card '>
       <h2 className='card-title'>{post.post.category}</h2>
       <img src={post.post.image} className='card-img-top' alt='...' />
       <div className='card-body'>
         <h5 className='card-title'>{post.post.title}</h5>
         <p className='card-text'>{post.post.content}</p>
       </div>
       <ul className='list-group list-group-flush'>
         <li className='list-group-item'>{post.post.publish_date}</li>
         <li className='list-group-item'>{post.post.author}</li>
         
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
