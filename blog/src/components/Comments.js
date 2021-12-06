import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = ({ id }) => {
  const [yorum, setyorum] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/comments/${id}`)
      .then((res) => setyorum(res.data));
  }, []);
  console.log(yorum);
  return (
    <div>
      Comments sayfasi
      <div className='container d-flex justify-content-center mb-3'>
        {yorum.map((item, index) => (
          <p key={index}>{item.content} </p>
        ))}
      </div>
    </div>
  );
};

export default Comments;
