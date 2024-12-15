import React, { useState } from 'react';
import './style.css';

function Registerpage() {
    const [value, setValues] = useState({
        firstname: '',
        lastname: '',
        gmail: '',
        rolno: '',
        num: '',
        gender: '',
        psw1: '',
        psw2: '',
        uploadcv: '',
        pic: '',
        web: '',
        box: '',
    });

    const handleChange = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    };

    const resetFun = () => {
        setValues({
            firstname: '',
            lastname: '',
            gmail: '',
            gender: '',
            rolno: '',
            psw1: '',
            psw2: '',
        });
    };

    return (
        <>
            <div className='total'>
                <form onSubmit={handleSubmit}>
                  <center>
                    <h1>Registration form</h1></center>

                    <label htmlFor="firstname">Firstname <span className='clo'>*</span>:</label>
                    <input type="text" placeholder='Firstname' name='firstname' value={value.firstname} onChange={handleChange} /><br />

                    <label htmlFor="lastname">Lastname<span className='clo'>*</span>:</label>
                    <input type="text" placeholder='Lastname' name='lastname' value={value.lastname} onChange={handleChange} /><br />

                    <label htmlFor="gmail">Gmail<span className='clo'>*</span>:</label>
                    <input type="email" placeholder='Enter your email id' name='gmail' value={value.gmail} onChange={handleChange} /><br />

                    <label htmlFor="rolno">Rollnumber<span className='clo'>*</span>:</label>
                    <input type="text" placeholder='Enter your Rollnumber' name='rolno' value={value.rolno} onChange={handleChange} /><br />

                    <label htmlFor="num">Contact number<span className='clo'>*</span>:</label>
                    <input type="tel" placeholder='Enter your contact number' name='num' value={value.num} onChange={handleChange} /><br />

                    <label htmlFor="gender">Gender<span className='clo'>*</span>:</label>
                    <input type="radio" name='gender' value='Male' checked={value.gender === 'Male'} onChange={handleChange} />Male
                    <input type="radio" name='gender' value='Female' checked={value.gender === 'Female'} onChange={handleChange} />Female
                    <input type="radio" name='gender' value='Others' checked={value.gender === 'Others'} onChange={handleChange} />Others<br />

                    <label htmlFor="psw1">Create Password<span className='clo'>*</span>:</label>
                    <input type="password" placeholder='New password' name='psw1' value={value.psw1} onChange={handleChange} /><br />

                    <label htmlFor="psw2">Confirm Password<span className='clo'>*</span>:</label>
                    <input type="password" placeholder='Confirm password' name='psw2' value={value.psw2} onChange={handleChange} /><br />

                    <label htmlFor="uploadcv">Upload CV<span className='clo'>*</span>:</label>
                    <input type="file" name='uploadcv' onChange={handleChange} /><br />

                    <label htmlFor="pic">Upload Picture<span className='clo'>*</span>:</label>
                    <input type="file" name='pic' onChange={handleChange} required /><br />

                    <label htmlFor="web">Upload your Website URL:</label>
                    <input type="text" placeholder='Paste your URL here' name='web' value={value.web} onChange={handleChange} /><br />

                    <label htmlFor="box">About:</label><br />
                    <textarea name="box" cols={30} rows={10} placeholder='Enter your message here' value={value.box} onChange={handleChange}></textarea><br />

                    <div className='button'>
                        <button type='button' className='bt1' onClick={resetFun}>Reset</button>
                        <button type='submit' className='bt2'>Submit</button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default Registerpage;
