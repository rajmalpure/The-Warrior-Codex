import React, { useEffect, useState } from 'react';
import './Form.css'; // Assuming the CSS path is correct
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateForm() {
    const navigate = useNavigate();
    const { id } = useParams(); // To fetch the specific entity's ID

    const [formData, setFormData] = useState({
        Warrior : '',
        BirthYear : '',
        DeathYear : '',
        State : '',
        FamousBattle : '',
        Image : ''
    });

    // Fetch the existing data for editing
    useEffect(() => {
        if(id) { // Ensure there is an id to fetch data for
            axios.get(`https://list-of-warrriors.onrender.com/get/${id}`)
                .then((response) => {
                    setFormData({
                        Warrior: response.data.Warrior,
                        BirthYear: response.data.BirthYear,
                        DeathYear: response.data.DeathYear,
                        State: response.data.State,
                        FamousBattle: response.data.FamousBattle,
                        Image: response.data.Image
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id]); // Dependency array ensures useEffect runs when id changes

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.put(`https://list-of-warrriors.onrender.com/update/${id}`, formData)
            .then(() => {
                navigate('/'); // Adjust the navigate path as per your application's routing
                console.log(formData)
            })
            .catch((error) => {
                console.error(error);
            });
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
            <button type='submit' className='update'>
                Update
            </button>
                </form>
                <Link to="/"></Link>
            </div>
        </div>
    );
}

export default UpdateForm;
