
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const UserActivityChart = ( {selectedDateDetails} : {selectedDateDetails : { [key: string]: number }[]}) => {

  const formatted = selectedDateDetails.map((item : any) => {
    const key = Object.keys(item)[0];
    return {
      user: key,
      value: item[key],
    };
  });

  return (
        <ResponsiveContainer width="100%" height={250}>
    <BarChart   data={formatted}  >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="user" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#00897b" />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default UserActivityChart;
