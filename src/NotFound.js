import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <Link to='/' className='back-link'>
        Back to our site
      </Link>
    </div>
  );
};

export default NotFound;
