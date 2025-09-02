import React from 'react';
import './TechnologySection.css';

export default function TechnologySection({ data, setData }) {
  return (
    <div className="technology-section">
      <h2>Technology Usage</h2>

      <label>Phone Usage (hours)</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.phoneUsage}
        onChange={(e) => setData({ ...data, phoneUsage: Number(e.target.value) })}
      />

      <label>Top Used Apps</label>
      <textarea
        rows="3"
        placeholder="e.g. Instagram, Telegram, YouTube"
        value={data.topApps}
        onChange={(e) => setData({ ...data, topApps: e.target.value })}
      />

      <label>Movie/Series Watching (hours)</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.movieTime}
        onChange={(e) => setData({ ...data, movieTime: Number(e.target.value) })}
      />

      <label>Gaming Time (hours)</label>
      <input
        type="number"
        min="0"
        max="24"
        value={data.gamingTime}
        onChange={(e) => setData({ ...data, gamingTime: Number(e.target.value) })}
      />
    </div>
  );
}
