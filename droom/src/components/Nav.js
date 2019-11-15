import React from 'react';
import { Link, Route } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/JobListingForm';
import SearchEmployees from './Company/NewEmployeeSearch';
import JobSearch from './JobSeeker/JobSeeking';
import Account from './Account';

function Nav() {
    return(
        <>
        <nav>
            <Link to='/signin'>Sign in|</Link>
            <Link to='/signup'>Sign up|</Link>
            <Link to='/seeker/dashboard'>Job-Seeker Swiping|</Link>
            <Link to='/seeker/search'>Search for Jobs|</Link>
            <Link to='/seeker/account'>Account|</Link>
            <Link to='/company/search'>Search for Employees|</Link>
            <Link to='/company/dashboard'>Company Swiping|</Link>
            <Link to='/company/listing'>Create a Listing</Link>
        </nav>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/seeker/dashboard' component={SeekerSwiping} />
        <Route exact path='/seeker/search' component={JobSearch} />
        <Route exact path='/seeker/account' component={Account} />
        <Route exact paht='/company/search' component={SearchEmployees} />
        <Route exact path='/company/dashboard' component={CompanySwiping} />
        <Route exact path='/company/listing' component={ListingForm} />
        </>
    )
}

export default Nav