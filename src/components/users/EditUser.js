import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    Layout: "",
    Capacity: "",

  });

  const { name, Layout, Capacity} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div >
        <h2 className="text-center mb-4">Edit Table</h2>

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
              placeholder="Enter Layout"
              name="Layout"
              value={Layout}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input

              className="form-control form-control-lg"
              placeholder="Enter Capacity"
              name="Capacity"
              value={Capacity}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
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
          </div> */}
          {/* <button className="btn btn-warning btn-block">Update Table</button>
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

        <button   className="btn1">Update Table</button>



      </form>
      </div>
    </div>
  );
};

export default EditUser;
