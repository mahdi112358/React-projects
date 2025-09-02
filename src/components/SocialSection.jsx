import React from 'react';
import './SocialSection.css';

export default function SocialSection({ data, setData }) {
  return (
    <div className="social-section">
      <h2>Social Interaction</h2>

      <label>Interaction Level (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.interaction}
        onChange={(e) => setData({ ...data, interaction: Number(e.target.value) })}
      />

      <label>Loneliness Feeling (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        value={data.loneliness}
        onChange={(e) => setData({ ...data, loneliness: Number(e.target.value) })}
      />

      <label>Notable Social Events</label>
      <textarea
        rows="4"
        placeholder="e.g. argument, important call, stressful meeting..."
        value={data.socialEvent}
        onChange={(e) => setData({ ...data, socialEvent: e.target.value })}
      />
    </div>
  );
}
