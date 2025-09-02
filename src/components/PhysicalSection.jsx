import React from 'react';
import './PhysicalSection.css';

export default function PhysicalSection({ data, setData }) {
  return (
    <div className="physical-section">
      <h2>Physical State</h2>

      <label>Sleep Time (hours)</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.sleep_time}
        onChange={(e) => setData({ ...data, sleep_time: Number(e.target.value) })}
      />

      <label>Sleep Duration (hours)</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.sleep}
        onChange={(e) => setData({ ...data, sleep: Number(e.target.value) })}
      />

      <label>Exercise</label>
      <select
        value={data.exercise}
        onChange={(e) => setData({ ...data, exercise: e.target.value })}
      >
        <option value="">Select</option>
        <option value="None">None</option>
        <option value="Light">Light</option>
        <option value="Moderate">Moderate</option>
        <option value="Intense">Intense</option>
      </select>

      <label>Exercise Duration (minute)</label>
      <input
        type="number"
        min="0"
        value={data.exercise_dur}
        onChange={(e) => setData({ ...data, exercise_dur: Number(e.target.value) })}
      />

      <label>Water Drinked</label>
      <input
        type="number"
        min = "0"
        max = "15"
        value={data.water}
        onChange={(e) => setData({ ...data, water: e.target.value })}
      />


      <label>Fatigue Level (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.fatigue}
        onChange={(e) => setData({ ...data, fatigue: Number(e.target.value) })}
      />

      <label>Meals</label>
      <textarea
        rows="3"
        value={data.meals}
        onChange={(e) => setData({ ...data, meals: e.target.value })}
      />
    </div>
  );
}
