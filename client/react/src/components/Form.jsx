import React from 'react'
import "./Form.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {

    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        Warrior : "",
        BirthYear : "",
        DeathYear : "",
        State : "",
        FamousBattle : "",
        Image : ""
      });

      

      const handleSubmit = async (event) => {
        console.log("working")
        event.preventDefault(); 
    
        const res = await axios.post('https://list-of-warrriors.onrender.com/add', formData)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevInfo) => ({
          ...prevInfo,
          [name]: newValue,
        }));
      };

  return (
    <div className='container'>
    <div className='content'>
        <form>
            <label> 
                Warrior :
                <br /> 
                <input
                type='text'
                name='Warrior'
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Birth Year :
                <br />
                <input
                type='Number'
                name='BirthYear'
                onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Death Year :
                <br />
                <input
                type='Number'
                name='DeathYear'
                onChange={handleChange}
                />
            </label>
            <br />

            <label>
                State : 
                <br />
                <input
                type='text'
                name='State'
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
            Famous Battle :
                <br /> 
                <input
                type='text'
                name='FamousBattle'
                onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Image : 
                <br />
                <input
                type='text'
                name='Image'
                onChange={handleChange}
                />
            </label>
            <br/>

            <button className='submit' onClick={()=> handleSubmit(event)}>
                Submit
            </button>
        </form>
    </div>
    </div>
  )
}


export default Form;

