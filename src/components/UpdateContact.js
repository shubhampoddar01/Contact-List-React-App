import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { useToasts } from 'react-toast-notifications';

const UpdateContact = () => {
    const [name, setName] = useState('');
    const[companyName,setcompanyName]=useState('');
    const [userName, setuserName] = useState('');
    const [number, setNumber] = useState('');
     
    const { id } = useParams();
    // const { adToast } = useToasts();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setcompanyName(currentContact.companyName);
            setuserName(currentContact.userName);
            setNumber(currentContact.number);
        }

    }, [currentContact]);

    const handleSubmit = e => {
        e.preventDefault();

        const checkuserName = contacts.find(contact => contact.id !== parseInt(id) && contact.userName === userName);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

        if (!userName || !number || !name || !companyName) {
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
            id: parseInt(id),
            name,
            companyName,
            userName,
            number
        }

        dispatch({ type: 'UPDATE_CONTACT', payload: data });
        toast.success("Contact updated successfully!");
        navigate('/Contact_List_App');
    };

    return (
        <div className='updateContact'>
            {
                currentContact ? (
                    <>
                        <h1>Edit Contact {id}</h1>
                        <div className='row'>
                            
                                <form onSubmit={handleSubmit}>
                                    <div className='form-inputs'>
                                        <input style={{height:25,marginBottom:3}} size="30" type='text' placeholder='Name' className=''
                                            value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className='form-inputs'>
                                        <input style={{height:25,marginBottom:3}} size="30" type='text' placeholder='CompanyName' className=''
                                            value={companyName} onChange={e => setcompanyName(e.target.value)} />
                                    </div>
                                    <div className='form-inputs'>
                                        <input style={{height:25,marginBottom:3}} size="30" type='userName' placeholder='Email' className=''
                                            value={userName} onChange={e => setuserName(e.target.value)} />
                                    </div>
                                    <div className='form-inputs'>
                                            <input type="number" style={{height:25,marginBottom:3,width: 228}} value={number} placeholder='Phone Number' onChange={e => setNumber(e.target.value)}/>
                                    </div>
                                    <div className='form-inputs'>
                                        <button style={{marginRight:10,fontSize:20,color:"white",backgroundColor:"black",cursor:"pointer"}}>
                                         Update Contact
                                        </button>
                                        <Link to='/' className=''>Cancel</Link>
                                    </div>
                                </form>
                            
                        </div >
                    </>
                ) : (
                    <h1 className=''>Loading...</h1>
                )
            }

        </div >
    )
}

export default UpdateContact;