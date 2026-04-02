import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resData=[
  {
    "name": "Rahim",
    "physics": 78,
    "chemistry": 72,
    "math": 85
  },
  {
    "name": "Karim",
    "physics": 65,
    "chemistry": 70,
    "math": 60
  },
  {
    "name": "Ayesha",
    "physics": 88,
    "chemistry": 91,
    "math": 95
  },
  {
    "name": "Nusrat",
    "physics": 74,
    "chemistry": 68,
    "math": 80
  },
  {
    "name": "Tanvir",
    "physics": 82,
    "chemistry": 77,
    "math": 73
  }
]

const ResultsChart = () => {

    return (
        <div className='mt-10'>
           <LineChart width={800} height={500} data={resData} >
                <XAxis dataKey = "name">
                    
                </XAxis>
                <YAxis>

                </YAxis>
                <Line dataKey="math" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
                <Line dataKey="physics" stroke='white'></Line>
            
            </LineChart> 
        </div>
    );
};

export default ResultsChart;