// pages/cv.js
import React from 'react';

const CVPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.8', margin: '20px auto', maxWidth: '1200px', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 3fr', gridGap: '20px', color: '#333' }}>
      {/* Top Section */}
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '30px', background: '#232323', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <img
          src="gorila.jpg"
          alt="Profile Photo"
          style={{ borderRadius: '50%', width: '250px', height: '250px', marginBottom: '10px', border: '4px solid white' }}
        />
        <h1 style={{ fontSize: '3.5rem', margin: '0', color: 'white' }}>Tomáš Řehák</h1>
        <p style={{ fontSize: '1.2rem', color: 'white' }}>Věk: 33 let</p>
        <p style={{ fontSize: '1.2rem', color: 'white' }}>Pozice / Specializace</p>
      </div>

      {/* Left Sidebar */}
      <aside style={{ background: '#232323', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Kontakt</h2>
          <p className="text-white">Email:  <a href="mailto:rehakktomas@seznam.cz" style={{ color: '#007bff' }}>rehakktomas@seznam.cz</a></p>
          <p className="text-white">Telefon: +420 773 648 601</p>
          <p className="text-white">LinkedIn: <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>linkedin.com/in/username</a></p>
          <p className="text-white">Github: <a href="https://github.com/Grzeho1" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>https://github.com/Grzeho1</a></p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Dovednosti</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '5px' }}>✔️ Dovednost 1</li>
            <li style={{ marginBottom: '5px' }}>✔️ Dovednost 2</li>
            <li style={{ marginBottom: '5px' }}>✔️ Dovednost 3</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Jazyky</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '5px' }}>🇨🇿 Čeština - Rodilý mluvčí</li>
            <li style={{ marginBottom: '5px' }}>🇬🇧 Angličtina - Pokročilý</li>
            <li style={{ marginBottom: '5px' }}>🇩🇪 Němčina - Základy</li>
          </ul>
        </section>
      </aside>

      {/* Main Content */}
      <main style={{ background: '#232323', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Pracovní zkušenosti</h2>
          <div style={{ marginBottom: '15px' }}>
            <h3 style={{ margin: '0', color: '#333' }}>Společnost ABC</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Pozice - Od MM/RRRR do MM/RRRR</em></p>
            <ul>
              <li>Popis úkolu a dosažených výsledků</li>
              <li>Další zodpovědnost</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Společnost XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Pozice - Od MM/RRRR do MM/RRRR</em></p>
            <ul>
              <li>Popis úkolu a dosažených výsledků</li>
              <li>Další zodpovědnost</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Vzdělání</h2>
          <div style={{ marginBottom: '15px' }}>
            <h3 style={{ margin: '0', color: '#333' }}>Univerzita ABC</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Střední škola XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Střední škola XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Střední škola XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Střední škola XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>Střední škola XYZ</h3>
            <p style={{ margin: '5px 0 10px 0', color: '#555' }}><em>Obor studia - Od MM/RRRR do MM/RRRR</em></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CVPage;
