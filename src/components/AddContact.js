import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState('');
    const[companyName,setcompanyName]=useState('');
    const [userName, setuserName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);
    // const { addToast } = useToasts();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const checkuserName = contacts.find(contact => contact.userName === userName && userName)
        const checkNumber = contacts.find(contact => contact.number === number && number)

        if (!companyName || !userName || !number || !name) {
            return toast.warning("Please fill in all fields!");
            // return addToast("Please fill in all fields!",{
            //     appearance:"error"
            // });
        }

        if (checkuserName) {
            return toast.error("This userName already Exists!");
            // return addToast("This userName already Exists!", {
            //     appearance: 'error'
            //   });
        }

        if (checkNumber) {
            return toast.error("This number already Exists!");
            // return addToast("This number already Exists!", {
            //     appearance: 'error'
            //   });
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            companyName,
            userName,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!!")
        navigate('/contact-list');
    };
    
    return (
        <div className='addContact'>
            <h1>Add New Contact</h1>
            <div className='main-container'>
                
                    <form onSubmit={handleSubmit}>
                        <div className='form-inputs'>
                            <input type='text' style={{height:25,marginBottom:3}} placeholder='Name' value={name} size="30" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-inputs'>
                            <input type='text' style={{height:25,marginBottom:3}} size="30" placeholder='CompanyName' value={companyName} onChange={e => setcompanyName(e.target.value)} />
                        </div>
                        <div className='form-inputs'>
                            <input type='text' style={{height:25,marginBottom:3}} size="30" placeholder='userName' value={userName} onChange={e => setuserName(e.target.value)} />
                        </div>
                        <div className='form-inputs'>
                        <input type="number" style={{height:25,marginBottom:3,width: 228}} value={number} placeholder='Phone Number' onChange={e => setNumber(e.target.value)}/>
                        </div>
                        <div className='submitBtn'>
                            <button style={{fontSize:20,color:"white",backgroundColor:"black",cursor:"pointer"}}>Add Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        
    )
}

export default AddContact;
