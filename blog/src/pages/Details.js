import React from 'react';
import { useContext } from 'react';
import Comments from '../components/Comments';
import { BlogContext } from '../context/BlogContext';

const Details = () => {
  const { islogin, BlogInfo } = useContext(BlogContext);
  console.log('detay', BlogInfo);

  return (
    <div>
      <div className='card '>
       <h2 className='card-title'>{BlogInfo.category}</h2>
       <img
         src={BlogInfo.image}
         className='card-img-top'
         alt='...'
         
       />
       <div className='card-body'>
         <h5 className='card-title'>{BlogInfo.title}</h5>
         <p className='card-text'>{BlogInfo.content}</p>
       </div>
       <ul className='list-group list-group-flush'>
         <li className='list-group-item'>{BlogInfo.publish_date}</li>
         <li className='list-group-item'>{BlogInfo.author}</li>
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
     <Comments id = {BlogInfo.id}/>
    </div>
  );
};

export default Details;
