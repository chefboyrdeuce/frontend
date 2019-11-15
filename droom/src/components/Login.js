import React from 'react';

function Signin() {
    return(
        <>
        <form>
            <h1>Sign In Here</h1>
            <select>
                <option value='employee'>Job-Seeker</option>
                <option valer='empolyer'>Employer</option>
            </select>
            <br />
            <input type='email' name='email' placeholder='Email' />
            <br/>
            <input type='password' name='password' placeholder='Password' />
            <br/>
            <button type='submit'>Sign In</button> 
        </form>
        </> 
    )
}

export default Signin