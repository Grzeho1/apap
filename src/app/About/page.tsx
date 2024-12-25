"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard"; 
import { SessionProvider, useSession } from "next-auth/react";
import { Job } from "../types/next-auth";
import { Session } from "inspector";



const CVPage = () => {

  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/About");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: Job[] = await res.json();
        setJobs(data);
      } catch (err: any) {
        console.error("Error fetching jobs:", err.message);
        setError("Chyba při načítání pracovních zkušeností.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  if (loading) {
    return <div>Načítání ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <SessionProvider>
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.8', margin: '20px auto', maxWidth: '1200px', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 3fr', gridGap: '20px', color: '#333' }}>
      {/* Vrchní sekce */}
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '30px', background: '#2a2a2a', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <img
          src="gorila.jpg"
          alt="Profile Photo"
          style={{ borderRadius: '50%', width: '250px', height: '250px', marginBottom: '10px', border: '4px solid white' }}
        />
        <h1 style={{ fontSize: '3.5rem', margin: '0', color: 'white' }}>Tomáš Řehák</h1>
        <p style={{ fontSize: '1.2rem', color: 'white' }}>Věk: 33 let</p>
        <p style={{ fontSize: '1.2rem', color: 'white' }}>Pozice / Specializace</p>
      </div>

      {/* levy Sidebar */}
      <aside style={{ background: '#232323', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Kontakt</h2>
          <p className="text-white">Email:  <a href="mailto:rehakktomas@seznam.cz" style={{ color: '#007bff' }}>rehakktomas@seznam.cz</a></p>
          
           {jobs?.map((job) => (
              <p key={job.id} className="text-white">Telefon: {job.tel || "Není k dispozici"}</p>
            ))}

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

      {/* Main  */}
      <main style={{ background: '#232323', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px', color: '#007bff' }}>Pracovní zkušenosti</h2>
          <div>
      <h1>Pracovní zkušenosti</h1>
      {jobs!.map((job) => (
        <div key={job.id}>
          <JobCard
            id={job.id}
            position={job.position}
            company={job.company}
            note={job.note}
          />
        </div>
      ))}
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
    </SessionProvider>
  );
  
};

export default CVPage;
