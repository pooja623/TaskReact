import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./AddUser.css"
import { Link } from "react-router-dom";


const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    Layout: "",
    Capacity: "",
  });

  const Cancel = ()=>{
    setUser(name="null",
    )
  }
  const { name, Layout, Capacity} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div >
      <div >
         <h3 className="header">Create Table</h3>
         <hr/>
        {/* <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>


        </form> */}


        <form onSubmit={e => onSubmit(e)}>


        <div className="Layout">
            <label  for="Layout">Layout:</label>
           <select name="Layout" value={Layout} onChange={e => onInputChange(e)} className="Box" >
            < option   >Select Layout</option>
             <option >Vertical</option>
             <option>Horizontal</option>
             <option >Grid</option>
        </select>


          </div>
         <div className="Layout">
        <label  for="Layout">Name:</label>
        <input
              type="text"
              className="name"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          {/* <input  className="name" placeholder="Enter Name" name="name"/> */}
        </div>
        <div className="Layout">
        <label  for="Layout">Capacity:</label>
        <input
              type="number"
              className="capacity"
              placeholder="Enter number of capacity"
              name="Capacity"
              value={Capacity}
              onChange={e => onInputChange(e)}
            />
          {/* <input  className="name" placeholder="Enter Name" name="name"/> */}
        </div>


          {/* <div className="Layout">
        <label  for="Layout">Capacity:</label>
          <input className="capacity" placeholder="Enter number of capacity" type="number"/>
        </div> */}

          <div className="Layout">
        <label  for="Layout">Status:</label>
            <input className="checkbox" type="checkbox" />
        </div>

        <div className="Layout">
        <label for="Layout">Image:</label>
            <input className="image" type="file" />
        </div>

        <button   className="btn1">Create Table</button>
<Link
                    className="btn2"
                    to={`/users/edit/${user.id}`}
                  >
                    Cancel
                  </Link>

      </form>




      </div>
    </div>
  );
};

export default AddUser;
