import React, { useState } from 'react'
 const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:"",
    });
    //handling input value
    const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
        ...user,
        [name]:value,
    });
    
    }
    //handling the form submission
   const handleSubmit=(e)=>{
   e.preventDefault();
   alert(e)
   console.log(user);
    }
  return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registraion-image">
                        <img src="/images/a2.jpg" alt="A Caffee" width="400" height="300"/>
                    </div>
                    {/* Registration form  */}
                    <div className="registration-form">
                        <h1 className='main-heading'>Login Form</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            
                            <div>
                            <label>
                                email
                            </label>
                            <input type="email"
                            name="email"
                            placeholder="Enter Email"
                            id="email"
                             required autoComplete='off'
                             value={user.email}
                             onChange={handleInput} />
                            </div>
                            
                            <div>
                            <label>
                                password
                            </label>
                            <input type="password"
                            name="password"
                            placeholder="Enter Password"
                            id="password"
                             required autoComplete='off' 
                             value={user.password}
                             onChange={handleInput}
                             />
                            </div>
                          <br />
                          <button type="submit" className='btn btn-submit'>Login Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}
export default Login;