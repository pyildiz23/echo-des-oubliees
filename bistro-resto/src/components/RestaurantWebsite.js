import React, { useState, useEffect } from 'react';
import { translations, menuItems, galleryImages } from '../data/data';
import { FaGlobe } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock, ChefHat, Menu, X } from 'lucide-react';

const RestaurantWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('en');
  const [reservation, setReservation] = useState({ name:'', email:'', phone:'', date:'', time:'', guests:'2'});
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  // Scroll olunca menüyü kapatma
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false); // scroll yapınca menüyü kapat
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleReservation = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(()=> setSubmitted(false), 5000);
    setReservation({ name:'', email:'', phone:'', date:'', time:'', guests:'2'});
  }

  return (
    <div>
     {/* NAVBAR */}
<nav className="navbar">
  {/* Sol taraf: Logo */}
  <div className="logo">Bistro Moderne</div>

  {/* Sağ taraf: Nav Links + Dil */}
  <div className="nav-right">
    {/* Desktop Menu */}
    <div className="nav-links">
      {Object.entries(t.nav).map(([key, value]) => (
        <button
          key={key}
          className={activeSection === key ? "active" : ""}
          onClick={() => setActiveSection(key)}
        >
          {value}
        </button>
      ))}
    </div>

    {/* Language Switcher - Nav links'ten SONRA */}
    <button className="lang-btn" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}>
      <FaGlobe size={18} style={{ marginRight: "6px" }} />
      {lang === 'en' ? 'FR' : 'EN'}
    </button>

    {/* Hamburger */}
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="mobile-menu">
      {Object.entries(t.nav).map(([key, value]) => (
        <button
          key={key}
          onClick={() => {
            setActiveSection(key);
            setMenuOpen(false);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  )}
</nav>



      {/* HERO */}
      {activeSection==='home' &&
        <div className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <button className="button-primary" onClick={()=>setActiveSection('reservations')}>{t.hero.cta}</button>
          </div>
        </div>
      }

      {/* ABOUT */}
      {activeSection==='home' &&
        <div className="section" id="about">
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
        </div>
      }

      {/* MENU */}
      {activeSection==='menu' &&
        <div className="section" id="menu">
          <h2>{t.menuSection.title}</h2>
          {['starters','mains','desserts'].map(category=>(
            <div className="menu-card" key={category}>
              <h3>{t.menuSection[category]}</h3>
              {menuItems[category].map((item,idx)=>(
                <div className="menu-item" key={idx}>
                  <span>{lang==='en'?item.name:item.name_fr}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      }

      {/* GALLERY */}
      {activeSection==='gallery' &&
        <div className="section" id="gallery">
          <h2>{lang==='en'?'Gallery':'Galerie'}</h2>
          <div className="gallery-grid">
            {galleryImages.map((img,idx)=>(
              <img key={idx} src={img} alt={`Gallery ${idx+1}`} />
            ))}
          </div>
        </div>
      }

      {/* RESERVATIONS */}
      {activeSection==='reservations' &&
        <div className="section" id="reservations">
          <h2>{t.reservationSection.title}</h2>
          {submitted && <div className="success-msg">{t.reservationSection.success}</div>}
          <form onSubmit={handleReservation}>
            <input type="text" placeholder={t.reservationSection.name} value={reservation.name} onChange={e=>setReservation({...reservation,name:e.target.value})} />
            <input type="email" placeholder={t.reservationSection.email} value={reservation.email} onChange={e=>setReservation({...reservation,email:e.target.value})} />
            <input type="tel" placeholder={t.reservationSection.phone} value={reservation.phone} onChange={e=>setReservation({...reservation,phone:e.target.value})} />
            <input type="date" value={reservation.date} onChange={e=>setReservation({...reservation,date:e.target.value})} />
            <input type="time" value={reservation.time} onChange={e=>setReservation({...reservation,time:e.target.value})} />
            <select value={reservation.guests} onChange={e=>setReservation({...reservation,guests:e.target.value})}>
              {[1,2,3,4,5,6,7,8].map(n=><option key={n} value={n}>{n}</option>)}
            </select>
            <button className="button-primary" type="submit">{t.reservationSection.submit}</button>
          </form>
        </div>
      }
{/* Contact Section */}
{activeSection === 'contact' && (
  <div className="contact-section">
    <div className="contact-card">
      {/* Contact Info */}
      <div className="contact-info">
        <div>
          <MapPin style={{ color: '#f59e0b', width: '24px', height: '24px' }} />
          <div>
            <h3>Address</h3>
            <p>123 Rue de la Gastronomie<br />75001 Paris, France</p>
          </div>
        </div>

        <div>
          <Phone style={{ color: '#10b981', width: '24px', height: '24px' }} />
          <div>
            <h3>Phone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>

        <div>
          <Mail style={{ color: '#ef4444', width: '24px', height: '24px' }} />
          <div>
            <h3>Email</h3>
            <p>contact@bistromoderne.fr</p>
          </div>
        </div>

        <div>
          <Clock style={{ color: '#3b82f6', width: '24px', height: '24px' }} />
          <div>
            <h3>{t.contact.hours}</h3>
            <p>{t.contact.hoursDetail}</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3412!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
)}

      {/* FOOTER */}
      <footer>
        <h3>Bistro Moderne</h3>
        <p>© 2025 Bistro Moderne. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default RestaurantWebsite;
