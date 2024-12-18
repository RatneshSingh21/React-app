import { useState } from "react";

export default function Form() {
  let [formData, setformData] = useState(
    {
        fullName :"",
        userName :""
    }
  );
//   let changeName = (event) => {
//     // console.log(event.target.value);
//     setFullName(event.target.value);
//   };

let changeFormData =(event)=>{
  console.log(event.target.name);
  console.log(event.target.value);
  let feildName=event.target.name;
  let newValue =event.target.value;
  setformData((curr)=>{
    curr[feildName]=newValue;
    return {...curr};

  })
  
}

let changeForm=(event)=>{
    event.preventDefault();
    setformData({
        fullName :"",
        userName :""

    })
}
  return (
    <>
      <form onClick={changeForm}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={changeFormData}
          name="fullName"
        />
        <br /> <br />

        <input
          type="text"
          placeholder="Enter User Name"
          value={formData.userName}
          onChange={changeFormData}
          name="userName"
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </>
  );
}
