import React from 'react';
import { ResponsivePie } from '@nivo/pie';

// Define speed value
const speed = 100.0; // Adjust this value as needed
const remainingValue = 100 - speed;
// const score =88
// Calculate equal value for the other segments
const equalValue = 100 / 6; // 5 remaining segments
const gradient = `linear-gradient(to right, 
  #FF0000,  /* Red */
  #FF4500,  /* Orange-red */
  #FFA500,  /* Orange */
  #FFFF00,  /* Yellow */
  #ADFF2F,  /* Green-yellow */
  #127a33   /* Green */
)`;

const data = [
  { id: 'speed', value: equalValue, color: '#FF0000' },  // Red
  { id: 'part1', value: equalValue, color: '#FF4500' }, // Orange-red
  { id: 'part2', value: equalValue, color: '#FFA500' }, // Orange
  { id: 'part3', value: equalValue, color: '#FFFF00' }, // Yellow
  { id: 'part4', value: equalValue, color: '#ADFF2F' }, // Green-yellow
  { id: 'rest', value: equalValue, color: '#127a33' }, // Grey for remaining
];

const SpeedTestGauge = ({score}) => {
  return (
    <div style={{ 
      height: '260px', 
      position: 'relative', 
      width: "335px", 
      marginTop: '-40px',
      backgroundImage: gradient,  // Applying the gradient as the background
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text', 
      color: 'transparent',
    }}>
      {/* Nivo Pie Chart */}
      <ResponsivePie
        data={data}
        startAngle={-90}
        endAngle={90}
        innerRadius={0.6}
        padAngle={0.5}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}  // Single color applied here
        enableArcLabels={false}
        enableArcLinkLabels={false}
        height={300}
        width={300}
      />
      
      
      {/* Arrow to indicate the score */}
      <svg
        style={{
          position: 'absolute',
          top: '48%',
          left: '45%',
          transformOrigin:'bottom',
          transform: `translate(-50%, 0%) rotate(${((score - 1) * 180 / 99) - 90}deg)`,

        }}
        width="20"
        height="100"
      >
        <polygon points="10,0 0,100 20,100" fill="black" />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '46%',
          transformOrigin: 'bottom',

          transform: 'translate(-50%, -50%)',
          fontSize: '18px',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}><strong>{score}%</strong></p>
        <p style={{}}>Business Idea Score</p>
      </div>
    </div>
  );
};

export default SpeedTestGauge;
