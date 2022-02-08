import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
//import optionForForm from './optionForForm'
import Select from 'react-select'

const customStyles = {
	option: (provided, state) => ({
		...provided,
		borderBottom: '1px dotted pink',
		padding: 20,
	}),
	control: styles => ({...styles, border: '1px solid #adadad', borderRadius: '30px'}),
	groupHeading: styles => ({...styles, fontSize: '18px', fontWeight: 'bold', color: '#863638'})
}
function handleSubmit(ev) {
  if((ev.name.value).length > 25 ||ev.age.value<=0)     // valid form;
     throw 'have a error!';
  ev.preventDefault();
  const answer = {
    name: ev.name.value,
    age: ev.age.value,
    pet: ev.pet.value,
    color: ev.color.value
  };
  this.userAdd(answer);
}
  const optionForForm = [
	{
		label: 'Dog',
		value: "dog",
	},

	{
		label: 'Cat',
		value: "cat",
	},
	{
		label: 'Horse',
		value: "horse",
	},
	{
		label: 'Other',
    value: "other",
	},
];




function App() {
  return (
    <div className="new_pet">
     <form onSubmit={(ev) => handleSubmit(ev)}>
     <label>
          Name:
          <input placeholder="name"  type="text"  />
      </label>
      <label>
          Age:
          <input placeholder="age" type="Number"  />
      </label>
      <br></br>
      <label>choose pet: </label>
      <Select
          styles={customStyles}
          options={optionForForm}
          placeholder="please choose"
     />

     <label>choose color: </label>
        <input type="radio" value="Black" name="color" /> Black
        <input type="radio" value="White" name="color" /> White


        <input type="submit" value="Submit" />
        
     </form>
    </div>
  );
}

export default App;
 
