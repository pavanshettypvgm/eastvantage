import React from 'react'
import PropTypes from 'prop-types';

function Details({details,getData}) {
    const {email,name}= details;
    
  return (
    <div className='details'>
        <h3>Name : {name?.title} {name?.first} {name?.last}</h3>
        <h3>Email : {email}</h3>
        <button onClick={getData}>Refresh</button>
    </div>
  )
}

Details.propTypes = {
  details: PropTypes.object,
  getData:PropTypes.func,
  title:PropTypes.string,
  first:PropTypes.string,
  last:PropTypes.string,
  email:PropTypes.string
};

export default Details

