import React from 'react';
import './PersonalSection.css';

export default function PersonalSection({ data, setData }) {
  return (
    <div className="personal-section">
      <h2>Personal Reflection</h2>

      <label>Overall Satisfaction (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.satisfaction}
        onChange={(e) => setData({ ...data, satisfaction: Number(e.target.value) })}
      />

      <label>
        Did you meditate today?
        <input
          type="checkbox"
          checked={data.meditation}
          onChange={(e) => setData({ ...data, meditation: e.target.checked })}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <label>
        Did you take any tests today?
        <input
          type="checkbox"
          checked={data.testTaken}
          onChange={(e) => setData({ ...data, testTaken: e.target.checked })}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <label>How do you feel about tomorrow?</label>
      <textarea
        rows="3"
        placeholder="e.g. hopeful, anxious, excited..."
        value={data.tomorrowFeeling}
        onChange={(e) => setData({ ...data, tomorrowFeeling: e.target.value })}
      />

      <label>Plan for Tomorrow</label>
      <textarea
        rows="4"
        placeholder="e.g. study, workout, meeting, rest..."
        value={data.tomorrowPlan}
        onChange={(e) => setData({ ...data, tomorrowPlan: e.target.value })}
      />
    </div>
  );
}
