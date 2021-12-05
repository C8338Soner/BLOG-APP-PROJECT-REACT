import { Button, Form, Row, Col } from 'react-bootstrap';
import { BlogContext } from '../context/BlogContext';
import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewBlog = () => {
  const history = useHistory();
  const { setisChange, isChange, logininfo, setlogininfo, category } =
    useContext(BlogContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let bloginfo = {};
    data.forEach(function (value, key) {
      bloginfo[key] = value;
    });

    bloginfo['author_id'] = logininfo.user.id;
    console.log('blog info', bloginfo);
    await axios
      .post(
        'http://127.0.0.1:8000/postcreate/',
        bloginfo
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      )
      .then((res) => {
        setisChange(!isChange);
        history.push('/');
      });
  };

  return (
    <div className='col-8 container'>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>Category</Form.Label>
            <Form.Select name='category_id' defaultValue='Choose...'>
              {category.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control name='title' type='text' placeholder='Enter Title' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Conetent</Form.Label>
          <Form.Control
            name='content'
            as='textarea'
            rows={3}
            placeholder='............'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control name='image' placeholder='Enter image url' />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridState' className='col-3'>
            <Form.Label>Status</Form.Label>
            <Form.Select name='status' defaultValue='Draft'>
              <option>draft</option>
              <option>published</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewBlog;
