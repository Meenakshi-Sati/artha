import React from 'react';

import dataUsers from '../../data/users.js';

function Demo() {
  const [users, setUsers] = React.useState(dataUsers);

  return (
    <div className='d-flex' style={{ gap: '20px', flexWrap: 'wrap' }}>
      {users.map((user, i) => (
        <div class='card' style={{ width: '18rem', margin: '20px' }}>
          <div class='card-body'>
            <h5 class='card-title'>{user.name}</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' class='btn btn-primary'>
              {user.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Demo;
