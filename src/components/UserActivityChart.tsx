import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const UserActivityChart = () => {
    
  const formatted = data.map((item) => {
    const key = Object.keys(item)[0];
    return {
      user: key,
      value: item[key],
    };
  });

  return (
    <BarChart width={400} height={250} data={formatted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="user" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  );
};

export default UserActivityChart;
