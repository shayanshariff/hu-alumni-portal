import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import BackButton from '../backButton/backButton';
import { useLocation } from 'react-router-dom';


const CS = [
  { id: 'Employed', value: 10 },
  { id: 'Unemployed', value: 20 },
  { id: 'Higher Studies', value: 30 },
];

const CE = [
    { id: 'Employed', value: 20 },
    { id: 'Unemployed', value: 40 },
    { id: 'Higher Studies', value: 65 },
];

const EE = [
    { id: 'Employed', value: 15 },
    { id: 'Unemployed', value: 30 },
    { id: 'Higher Studies', value: 50 },
];

const PieChart = () => {
  const [data, setData] = useState(CS);
  const location = useLocation();
  data = location.state?.dataUpdates;
  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setData(selectedValue);
  };
  for (var key of Object.keys(data)) {
    if(parseInt(data[key].batch) < 2023) {
      console.log("Alumni");
    }
  }
  return (
    <>
    <BackButton/>
      <select onChange={handleFilterChange}>
        <option value="CS">CS</option>
        <option value="CE">CE</option>
        <option value="EE">EE</option>
      </select>
      <div style={{ height: '500px' }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'category10' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </>
  );
};

export default PieChart;
