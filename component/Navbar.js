import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return <>
<nav className="navbar navbar-expand-lg navbar-light bg-light my-2">
  <div className="collapse navbar-collapse d-flex justify-content-center">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link href="/homes"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item active">
        <Link href="/blog"><a className="nav-link">Blog</a></Link>
        </li>
        <li className="nav-item active">
        <Link href="/myPages/about[id]"><a className="nav-link">about</a></Link>
        </li>
        <li className="nav-item active">
        <Link href="/profile"><a className="nav-link">Profile</a></Link>
        </li>
    </ul>
  </div>
</nav>
  </>;
};

export default Navbar;
