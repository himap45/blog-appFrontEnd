import React, { useEffect, useState } from 'react';
import Login from '../login/Login';
import './signup.css';
import validation from './validation';


function Signup(props) {
    //storing formfieldvalues
    const[formValues,setFormValues]=useState({username:"",email:"",password:""});
    //Manage formerrorvalues
    const[formErrorValues,setFormErrorValues]=useState({});
    //Flag for form submission status
    const[isSubmit,setIsSubmit]=useState(false);
    //manage fieldchange
    const handleChange=(event)=>{
         
          const{name,value}=event.target;//destructuring
          setFormValues({...formValues,[name]:value});
          console.log(formValues);
    }
    //prevent form refreshing
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
       
    }
   useEffect(()=>{
    if (Object.keys(formErrorValues).length === 0 && isSubmit) {
        alert("success");
    }
}, [formErrorValues]);
   
    return (
        <div>
        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden='true'/>
        {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) :<p></p>}

        <div className="signup">
			<form onSubmit={handleSubmit}>
				<label for="chk" class="sig">Sign up</label>
		<div className="user-box">
                <input type="text" name="username" required value={formValues.username} onChange={handleChange}/>
                <label>Username</label>
                <p className='err'>{formErrorValues.username}</p>
        </div>      
        <div class="user-box">
                <input type="email" name="email" required value={formValues.email} onChange={handleChange} />
                <label>Email</label>
                <p className='err'>{formErrorValues.email}</p>
        </div>
        <div class="user-box">
                <input type="password" name="password" required value={formValues.password} onChange={handleChange}/>
                <label>Password</label>
                <p className='err'>{formErrorValues.password}</p>
        </div>
          
		<button >Sign up</button>
			</form>
		</div>
  
        </div>
        </div>
    );
}

export default Signup;