import React from 'react'
import { useSelector } from 'react-redux'
import ContactLoop from './ContactLopp'



const Contact = () => {
    const contacts = useSelector((state) => state.contact)
    console.log(contacts , " contac name");
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <labe className="custom-control-label"></labe>
                            </div>
                        </th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contacts,id ) => <ContactLoop key={id} contactList={contacts} />
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Contact;