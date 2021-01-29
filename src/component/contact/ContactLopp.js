import Avatar from 'react-avatar'
import { Link } from "react-router-dom";


const ContactLoop = (props) => {
    // console.log(props.contactList.id, "key value");
    const {name, username, email,} = props.contactList
    return(
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <labe className="custom-control-label"></labe>
                </div>
            </td>
            <td><Avatar className="mr-2" name={name} size="30" round={true} />{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td className="d-flex">
                <Link to="/" className="">
                    <i className="bi bi-pencil-fill mr-2"></i>
                </Link>
                <Link to="/" className="text-danger">
                    <i className="bi bi-trash-fill"></i>
                </Link>
            </td>
        </tr>
    )
}
export default ContactLoop;