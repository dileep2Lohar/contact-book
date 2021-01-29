import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import addcontact from '../../Store'


const Addcontact = () => {
    const dispatch = useDispatch();
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")

    const createContact = (e) => {
        e.preventDefault();
        const new_contact = {
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addcontact(new_contact));
    }
    return(
        <div className="card border-0 shadow">
            <div className="card-header">Add To Contact</div>
            <div className="card-body">
                <form onSubmit={createContact}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your name" value={name} onChange={ (event) => setname(event.target.value) }/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Number" value={phone} onChange={ (event)=> setphone(event.target.value) } />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your email" value={email} onChange={ (event) => setemail(event.target.value) } />
                    </div>
                    <button className="btn btn-primary" value="submit" >Create Contact</button>
                </form>
            </div>
        </div>
    )
}
export default Addcontact