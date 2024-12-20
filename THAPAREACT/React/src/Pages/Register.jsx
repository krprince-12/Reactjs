import React, { useState } from 'react'
 const Register = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
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
                        <h1 className='main-heading'>Registration Form</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <label>
                                username
                            </label>
                            <input type="text"name="username"
                            placeholder="Enter Username"
                            id="username" 
                            required autoComplete='off'
                            value={user.username} 
                            onChange={handleInput}/>
                            </div>
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
                                phone
                            </label>
                            <input type="number"
                            name="phone"
                            placeholder="Enter Phoneno"
                            id="phone" 
                            required autoComplete='off' 
                            value={user.phone}
                            onChange={handleInput}/>
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
                          <button type="submit" className='btn btn-submit'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}
export default Register;