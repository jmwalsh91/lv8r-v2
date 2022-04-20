import React from "react";

type Props = {};

export function Stats() {
  return (
    <div className="stats sm:stats-horizontal">
      <div className="stat">
        <div className="stat-title">Likes</div>
        <div className="stat-value">93</div>
      </div>
      <div className="stat">
        <div className="stat-title">Dislikes</div>
        <div className="stat-value">17</div>
      </div>
    </div>
  );
}

export default Stats;
