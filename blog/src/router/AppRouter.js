import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from '../components/Posts';
import Header from '../pages/Header';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Details from '../pages/Details';



const AppRouter = () => {
  const { islogin, BlogItem } = useContext(BlogContext);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route  path='/login' component={Login} />
          <Route  path='/newblog' component={NewBlog} />
          <Route  path='/detail' component={Details} />
          <Route exact path='' component={Posts} />

          {/* <Route path='/register' component={Register} />
          
          {islogin ? <Route path='/newblog' component={NewBlog} /> : null}
          {islogin && BlogItem ? (
            <Route path='/updateblog' component={UpdateBlog} />
          ) : null}
          <Route path='/' component={Cards} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
