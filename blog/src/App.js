import './App.css';
import AppRouter from './router/AppRouter';
import { BlogContext } from './context/BlogContext';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
// import { useFetch } from './utils/Functions';

function App() {
  // const [date, setDate] = useState(Date().slice(4, 21));
  // const { info } = useFetch();
  // const [loginInfo, setloginInfo] = useState([{ email: '', password: '' }]);
  const [category, setCategory] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/category/')
      .then((res) => setCategory(res.data));

    axios
      .get('http://127.0.0.1:8000/postcreate/')
      .then((res) => setPosts(res.data));
  }, []);
  

  return (
    <div>
      <BlogContext.Provider
        value={{
          setPosts,
          posts,
          setCategory,
          category,   
      
        }}
      >
        <AppRouter />
      </BlogContext.Provider>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
