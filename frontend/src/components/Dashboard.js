import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback")
    .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>All Feedback</h2>
      {data.map((item, i) => (
        <p key={i}>
          {item.date} - {item.mealType} - {item.rating}
        </p>
      ))}
    </div>
  );
}

export default Dashboard;