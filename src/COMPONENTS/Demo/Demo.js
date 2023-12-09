import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Demo() {
  const data = useSelector((store) => store.users);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch({
      type: 'users/add',
      payload: {
        name: 'Keshav',
        email: 'keshav@gmail.com',
      },
    });
  }

  return (
    <>
      <div className='d-flex' style={{ gap: '20px', flexWrap: 'wrap' }}>
        {data.map((user, i) => (
          <div className='card' style={{ width: '18rem', margin: '20px' }}>
            <div className='card-body'>
              <h5 className='card-title'>{user.name}</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                {user.email}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className='primary primary-btn' onClick={handleAdd}>
        {' '}
        Add{' '}
      </button>
    </>
  );
}

export default Demo;
