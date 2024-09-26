import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    // if(formData.name.trim() === ''){
    //     return;
    // }
    // if(!formData.email.includes('@')){
    //     return;
    // }
  return (
    <div className="flex flex-col overflow-x-hidden">
        <div>Contact Form</div>
        <form  onSubmit={handleSubmit} className="flex justify-center gap-12">
            <label className="shadow-emerald-400 border-b-green-800">
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name' maxLength={30} width={50} />
            </label>
            <label className="shadow-emerald-400 border-b-green-800">
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' maxLength={30}/>
            </label>
            <label className="shadow-emerald-400 border-b-green-800">
                <textarea type="text" name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' />
            </label>

            <button type='submit' className="btn-primary block mt-4 p-3">Submit</button>
        </form>
    </div>

  )
}

export default Contact