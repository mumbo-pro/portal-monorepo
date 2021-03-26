import React, { useState } from 'react';

function Register () {

  const [email,setEmail] = useState( '')
  const [password,setPassword] = useState( '')

  const onSubmit = e => {
    e.preventDefault();    
  };
    return (
      <div>
       Ok
      </div>
    );
  }

export default Register;

