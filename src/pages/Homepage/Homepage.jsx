import React from 'react';
import { Link } from 'react-router-dom';
import './homepage-styles.css'

const Homepage = () => {
    return (
        <div>
            <div className='App'>
      <header>
        <div className='block'>
          <div className='coverBlock'>
            <div className='cover'>Cover</div>
          </div>
          <div className='buttonsBlock'>
            <Link className='home link' to='/'>Home</Link>
            <Link className='features link' to='/Features'>Features</Link>
            <Link className='contact link' to='/Contact'>Contact</Link>
          </div>
        </div>
      </header>
      <main>
        <div className='mainText'>
          <div className='coverTitle'>Cover your page.</div>
          <div className='coverText'><span>Cover is a one-page template 
          for building simple and beautiful home pages. 
          Download, edit the text, and add your own fullscreen 
          background photo to make it your own.</span></div>
        </div>
        <button className='more'>Learn more</button>
      </main>
      <footer>
        <div className='coverFooter'>Cover template for <a className='bootstrap' href='https://getbootstrap.com/'>Bootstrap</a>, by <a className='mdo' href='https://twitter.com/mdo'>@mdo</a>.</div>
      </footer>
    </div>
        </div>
    );
};

export default Homepage;