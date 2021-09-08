import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const COLORS = ['#EC426B', '#F46A5F', '#000000', '#8272DD', '#FEC35D'];

  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;

      return { name: genre, value: value };
    });
    data = data.filter(data => data.value)
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="200"
          cy="200"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;