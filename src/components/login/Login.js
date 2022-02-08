import React, { useState } from 'react';
import  './login.css';
function Login(props) {
  
    return (
       <div>
<div className="main">  	
		<input type="checkbox" id="chk"/>

			<div class="signup">
				<form>
					<label for="chk" class="sig">Login</label>
				
    <div className="user-box">
      <input type="text" name="Enter Username" required/>
      <label>Username</label>
    </div>
  
    <div class="user-box">
      <input type="password" name="Enter password" required/>
      <label>Password</label>
    </div>
          
					<button>Login</button>
				</form>
			</div>
  
        </div>

         
      
    </div> 
    );
}

export default Login;
