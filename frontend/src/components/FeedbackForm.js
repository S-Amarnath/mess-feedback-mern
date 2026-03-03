import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({
    date: "",
    mealType: "",
    menuItem: "",
    rating: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/feedback", form);
    alert("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" placeholder="Date" onChange={handleChange}/>
      <input name="mealType" placeholder="Meal Type" onChange={handleChange}/>
      <input name="menuItem" placeholder="Menu Item" onChange={handleChange}/>
      <input name="rating" placeholder="Rating" onChange={handleChange}/>
      <input name="comment" placeholder="Comment" onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;