import React from 'react';
import { Link } from 'react-router-dom';
import './features-styles.css'

const Features = () => {
    return (
        <div className='App'>
            <header>
        <div className='block'>
          <div className='coverBlock'>
            <div className='cover'>Cover</div>
          </div>
          <div className='buttonsBlock'>
            <Link className='homeF linkF' to='/'>Home</Link>
            <Link className='featuresF linkF' to='/Features'>Features</Link>
            <Link className='contactF linkF' to='/Contact'>Contact</Link>
          </div>
        </div>
      </header>
      <main>
        <div className='plusMinus'><span>Pluses and Minuses:</span></div>
        <div className='block-2'>
          <div className='pluses'>
            <div className='mp'>Pluses:</div>
            <li>1. Low price</li>
            <li>2. Quick work</li>
            <li>3. Phone adaptive</li>
            <li>4. Disign</li>
          </div>
          <div className='minuses'>
            <div className='mp'>Minuses:</div>
            <li>1. Slow loading</li>
            <li>2. Problems with analitic</li>
            <li>3. Problems with SEO</li>
            <li>4. Problems with ads</li>
          </div>
        </div>
      </main>
      <footer>
        <div className='coverFooter'>Cover template for <a className='bootstrap' href='https://getbootstrap.com/'>Bootstrap</a>, by <a className='mdo' href='https://twitter.com/mdo'>@mdo</a>.</div>
      </footer>
        </div>
    );
};

export default Features;