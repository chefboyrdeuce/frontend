import React from 'react';

function Signup(){
    return (
        <>
        <form>
            <h1>Sign Up Here</h1>
            <select>
                <option value='employee'>Job-Seeker</option>
                <option valer='empolyer'>Employer</option>
            </select>
            <br />
            <input type='text' name='name' placeholder='Name' />
            <br />
            <input type='email' name='email' placeholder='Email' />
            <br />
            <input type='text' name='occupation' placeholder='Current Job' />
            <br />
            <input type='text' name='experience' placeholder='Past Experience' />
            <br />
            <input type='text' name='droom' placeholder='Dream Job' />
            <br />
            <input type='password' name='password' placeholder='Password' />
            <br />
            <button type='submit'>Sign Up</button>
        </form>
        </>
    )
}

export default Signup