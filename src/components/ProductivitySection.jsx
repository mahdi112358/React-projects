import React from 'react';
import './ProductivitySection.css';

export default function ProductivitySection({ data, setData }) {
  return (
    <div className="productivity-section">
      <h2>Productivity</h2>

      <label>Overall Focus (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.focus}
        onChange={(e) => setData({ ...data, focus: Number(e.target.value) })}
      />

      <label>Effective Work Hours</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.workHours}
        onChange={(e) => setData({ ...data, workHours: Number(e.target.value) })}
      />

      <label>
        Important Tasks Completed
        <input
          type="checkbox"
          checked={data.tasksDone}
          onChange={(e) => setData({ ...data, tasksDone: e.target.checked })}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <label>Distraction Level (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.distraction}
        onChange={(e) => setData({ ...data, distraction: Number(e.target.value) })}
      />
    </div>
  );
}
