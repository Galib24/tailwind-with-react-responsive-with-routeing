import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DashBoard = () => {
    const marks = [
        { id: 1, name: "Alice", physics: 82, chemistry: 75, math: 88 },
        { id: 2, name: "Bob", physics: 65, chemistry: 78, math: 92 },
        { id: 3, name: "Charlie", physics: 70, chemistry: 85, math: 80 },
        { id: 4, name: "David", physics: 90, chemistry: 92, math: 87 },
        { id: 5, name: "Emily", physics: 75, chemistry: 80, math: 83 },
        { id: 6, name: "Frank", physics: 88, chemistry: 73, math: 81 },
        { id: 7, name: "Grace", physics: 82, chemistry: 80, math: 90 },
        { id: 8, name: "Helen", physics: 77, chemistry: 79, math: 85 },
        { id: 9, name: "Ivy", physics: 93, chemistry: 87, math: 89 },
        { id: 10, name: "Jack", physics: 81, chemistry: 84, math: 76 }
      ];
      
      

    return (
        <div>
 <LineChart
          width={1000}
          height={300}
          data={marks}>
         
          
          <Line  dataKey="physics"  />
          <Line  dataKey="math"  />
          <Line stroke='#804' dataKey="chemistry"  />
         <XAxis dataKey="name" /> 
         <YAxis />
         <Tooltip />
        </LineChart>
        </div>
    );
};

export default DashBoard;