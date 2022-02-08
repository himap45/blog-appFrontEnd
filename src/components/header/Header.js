import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav className="Header">
                <h2 className='logo'>Lets Blog..it!!!</h2>
                <div className='articles'>
                    <Link className="link" to ='/Home'>Home</Link>
                    <Link className="link" to ='/login'>Login</Link>
                    <Link className="link" to ='/signup'>Signup</Link>
                    <Link className="link" to ='/article-list'>Articlelist</Link>

                </div>
            </nav>
            
        </div>
    );
}

export default Header;