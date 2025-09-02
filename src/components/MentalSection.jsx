import React from 'react';
import './MentalSection.css';

export default function MentalSection({ data, setData }) {
  return (
    <div className="mental-section">
      <h2>Mental State</h2>

      <label>Mood</label>
      <select
        value={data.mood}
        onChange={(e) => setData({ ...data, mood: e.target.value })}
      >
        <option value="">Select Mood</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Stressed">Stressed</option>
        <option value="Calm">Calm</option>
        <option value="Energetic">Energetic</option>
      </select>

      <label>Energy (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.energy}
        onChange={(e) => setData({ ...data, energy: Number(e.target.value) })}
      />

      <label>Motivation (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.motivation}
        onChange={(e) => setData({ ...data, motivation: Number(e.target.value) })}
      />

      <label>Stress (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.stress}
        onChange={(e) => setData({ ...data, stress: Number(e.target.value) })}
      />

      <label>Activities</label>
      <textarea
        rows="3"
        value={data.activities}
        onChange={(e) => setData({ ...data, activities: e.target.value })}
      />

      <label>Diary</label>
      <textarea
        rows="4"
        value={data.diary}
        onChange={(e) => setData({ ...data, diary: e.target.value })}
      />
    </div>
  );
}
