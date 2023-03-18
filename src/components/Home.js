import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../index.css";

const Home = () => {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='add_contact'style={{display: "flex",justifyContent: "flex-end",fontSize:20}}>
                    <Link to='/add'>Add New Contact</Link>
                </div>
                <div className=''>
                    <table className='home_table'>
                    <tbody>
                            <tr className='home_table_head'>
                                <th>Sl.No.</th>
                                <th>Contact Name</th>
                                <th>Company Name</th>
                                <th>Username</th>
                                <th>Phone No.</th>
                                <th>Action</th>
                            </tr>
                        
                        {
                                contacts.map((contact, id) => (
                                    <tr style={{color:"lightgrey"}} key={id}>
                                        <td>{id+1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.companyName}</td>
                                        <td>{contact.userName}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} style={{marginLeft:30,marginRight:5,color:"blue"}}>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='deletebtn'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home;
