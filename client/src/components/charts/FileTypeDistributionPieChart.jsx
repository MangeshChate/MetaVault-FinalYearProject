import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const data = [
    { type: 'Document', count: 20 },
    { type: 'Image', count: 15 },
    { type: 'Audio', count: 10 },
    // Add more data...
];


const FileTypeDistributionPieChart = () => {
    const DARK_COLORS = ['#4472CA', '#6CB2EB', '#5B8FF9', '#6986F3', '#9FB3F6', '#769ECB', '#78B1FF', '#A3B9FF'];
    return (
      
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="type"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={70} // Inner radius to create the donut effect
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={DARK_COLORS[index % DARK_COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
      
    );
};

export default FileTypeDistributionPieChart;
