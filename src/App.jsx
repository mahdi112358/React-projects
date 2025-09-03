import React, { useState } from 'react';
import MentalSection from './components/MentalSection';
import PhysicalSection from './components/PhysicalSection';
import ProductivitySection from './components/ProductivitySection';
import TechnologySection from './components/TechnologySection';
import SocialSection from './components/SocialSection';
import PersonalSection from './components/PersonalSection';

function App() {
  const [formData, setFormData] = useState({
// Mentall
    mood: '',
    energy: 5,
    motivation: 5,
    stress: 5,
    activities: '',
    diary: '',
//phisical
    sleep_time: 12,
    sleep: 7,
    exercise: '',
    exercise_dur: 7,
    water: 0,
    fatigue: 5,
    meals: '',
//productivity
    focus: 5,
    workHours: 5, 
    tasksDone: false, 
    distraction: 5,
//technology  
    phoneUsage: 0,
    topApps: '',
    movieTime: 0,
    gamingTime: 0,
//sosial
    interaction: 5,
    loneliness: 5,
    socialEvent: '',
//personal
    satisfaction: 7,
    meditation: false,
    testTaken: false,
    tomorrowFeeling: '',
    tomorrowPlan: ''
  });

const handleSubmit = async () => {
  try {
    const response = await fetch('https://daily-log-api2-1.onrender.com/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('✅ Data saved successfully!');
    } else {
      alert('❌ Failed to save data.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('⚠️ Server error occurred.');
  }
};

  

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '28px', color: '#4a5fa3', marginBottom: '20px', textAlign: 'center' }}>Daily Log</h1>
      <MentalSection data={formData} setData={setFormData} />
      <PhysicalSection data={formData} setData={setFormData} />
      <ProductivitySection data={formData} setData={setFormData} />
      <TechnologySection data={formData} setData={setFormData} />
      <SocialSection data={formData} setData={setFormData} />
      <PersonalSection data={formData} setData={setFormData} />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4a5fa3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    </div>
  );
}

export default App;

