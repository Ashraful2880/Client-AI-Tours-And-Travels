import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Header.css';
import logo from '../../../Image/logo.png';

const Header = () => {
    const{user,handleSignOut}=useAuth();
    return (
        <div className='relative mb-1'>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top py-1">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div className="collapse navbar-collapse container " id="navbarTogglerDemo01">
                    <Link to="/home" className="">
                        <img className=" border border-3 rounded-circle p-2" src={logo} alt="mainLogo" />
                    </Link>
                <ul className="navbar-nav justify-content-end w-100 me-5">
                  <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/home"> Home </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/offers"> Offer </Link>
                  </li>
                  { user.email?
                    <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/myOrders"> My-Orders</Link>
                    </li>:''
                  }
                  { user.email?
                    <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/manageOrders"> Manage-Order</Link>
                    </li>:''
                  }
                  { user.email?
                    <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/addorder">Add Order</Link>
                    </li>:''
                  }
                  <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/about"> About </Link>
                  </li>
                  {!user.email?
                    <li className="nav-item">
                      <Link className="nav-link text-white fs-5" to="/register"> Register </Link>                      
                    </li>:""
                  }
                  <li className="nav-item">
                  {user.email?
                    <span className="text-info fs-6 userName ">{user.displayName}</span>:""
                  } 
                  {user.email?
                    <img className="user-image rounded-circle ms-3" src={user.photoURL} alt="user-img" /> :""
                  }                     
                  </li>
                  {user.email?
                    <li className="nav-item">
                        <Link onClick={handleSignOut} className="nav-link text-white fs-5" to="/home"><i className="fas fa-sign-out-alt"></i></Link>
                    </li>:
                    <li className="nav-item">
                        <Link className="nav-link text-white fs-5" to="/login"><i className="fas fa-sign-in-alt"></i></Link>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </nav>      
        </div>     
    );
};

export default Header;