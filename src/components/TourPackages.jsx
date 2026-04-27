import React, { useState } from 'react';
import PackageCard from './PackageCard';
import '../styles/TourPackages.css';

export default function TourPackages() {
  const [packages] = useState([
    {
      id: 1,
      name: 'Subah-e-Banaras Tour',
      description: 'Morning Ganga Aarti + Boat Ride + Sunrise View',
      price: 999,
      image: '🌅',
      duration: '4 hours',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Kashi Vishwanath Darshan',
      description: 'VIP Darshan + Temple Guide + Local Visit',
      price: 1499,
      image: '⛩️',
      duration: '6 hours',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Sarnath Tour',
      description: 'Buddhist Temple + Museum + Full Day Cab',
      price: 1999,
      image: '🕉️',
      duration: '8 hours',
      rating: 4.7,
    },
  ]);

  return (
    <section className="container py-5" id="packages">
      <h2 className="section-title">Popular Tour Packages</h2>
      <div className="row g-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="col-md-4">
            <PackageCard package={pkg} />
          </div>
        ))}
      </div>
    </section>
  );
}