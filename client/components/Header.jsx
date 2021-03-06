import React from 'react'
import {Link} from 'react-router-dom'
export default (props) => {
    return (
    <div>
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img className="headerimg" src="/images/2beers.png" /></a>
                        <div className="navbar-start">
                            <Link to='/'><h1 className="title headertitle">Hold My Beer...</h1></Link>
                        </div>

                        <button className="button navbar-burger">
                            <span><a href="/">Home</a></span>
                            <span>Users</span>
                            <span>Beers</span>
                            <span>Nuisance</span>
                        </button>
                </div>
            </nav>  
        </div>
    <hr />
    </div>
    )
}