import React from "react";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./contact-styles.css";

const Contact = () => {
  return (
    <div className="App">
      <header>
        <div className="block">
          <div className="coverBlock">
            <div className="cover">Cover</div>
          </div>
          <div className="buttonsBlock">
            <Link className="homeC linkC" to="/">
              Home
            </Link>
            <Link className="featuresC linkC" to="/Features">
              Features
            </Link>
            <Link className="contactC linkC" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="addressBlock">
          <div className="address"><div className="nash">Наш адресс:</div>
            <li>г.Грозный</li>
            <li>ул.Трошева 7</li>
            <li>ТД "Медина"</li>
            <li>5 этаж</li>
            <li>+7(928)746-55-22</li>
          </div>
        </div>
        <div className="map">
        <YMaps>
        <Map defaultState={{
          center: [43.318366, 45.692421], zoom: 13
        }}>
          <Placemark geometry={[43.324675, 45.692376]}/>
        </Map>
      </YMaps>
        </div>
      </main>
      <footer>
        <div className='coverFooter'>Cover template for <a className='bootstrap' href='https://getbootstrap.com/'>Bootstrap</a>, by <a className='mdo' href='https://twitter.com/mdo'>@mdo</a>.</div>
      </footer> 
    </div>
  );
};

export default Contact;
