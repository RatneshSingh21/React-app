import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInput = (event) => {
    setFormData((cur)=>{
        return {...cur,[event.target.name]:event.target.value};
    })
  };
  let handleSubmit=(event)=>{
    console.log(formData);
    event.preventDefault();
    setFormData({
        username: "",
        remarks: "",
        rating: 5,

    })
  }
  return (
    <div>
      <h1>Give a Comment..!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="enter user name:"
          value={formData.username}
          name="username"
          id="username"
          onChange={handleInput}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks:</label>
        <textarea
          placeholder="Remark"
          value={formData.remarks}
          name="remarks"
          id="remarks"
          onChange={handleInput}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          name="rating"
          id="rating"
          onChange={handleInput}
        />
        <br />
        <br />
        <button>Add a Comment</button>
      </form>
    </div>
  );
}
