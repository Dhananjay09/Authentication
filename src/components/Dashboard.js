import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Layout from "./Layout";
import Createpost from './CreatePost';
import RecipeReviewCard from './Post';
import AddIcon from '@material-ui/icons/Add';

  const Dashboard = () => {
  const [createpost, setCreatpost]=useState(false);
  const [users, setUsers] = useState([]);
  const [fileUpload, setFileUpload]=useState();
  const updatelike = (id) =>{
    console.log("Calling Upi");
       axios.post("/users/update-like",{ "id": id}).then(res =>{
       console.log(res);
       
     }).catch(err => {
       console.log("Error Occured"+err);
     })
     makeApiCall();
  }
  const makeApiCall = useCallback(() => {
    axios
      .get("users/all-products")
      .then((res) => {
        console.log("FETCH USERS SUCCESS!!", res);
        setUsers(res.data.result);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          toast.error(err.response.data.error);
        }
      });
  }, []);
  const handleUpload = useCallback((event)=>{
    console.dir(event.target);
    setFileUpload(event.target.files[0]);
  },[]);
  const onUpload = useCallback((event)=>{
  console.log(fileUpload)
  const data=new FormData();
/*  data.append("name","Gaurav Kumar Raghav");
  data.append("email","vipulsharma@iiitmanipur.ac.in");
  data.append("address","Gorakhput village lauduchand");
  data.append("pin",795003);
  data.append("product","Injoyull Thoughts");*/
  data.append("myImage",fileUpload);
  const config ={
    heaaders: {
     "content-type": "multipart/form-data"
    }
  }
  axios
      .post("files/image-upload", data, config)
      .then((res) => {
        console.log("FETCH UPLOAD SUCCESS!!", res);
        setUsers(res.data.result);
      })
      .catch((err ) => {
        if (err && err.response && err.response.data) {
          toast.error(err.response.data.error);
        }
      });
  },[])
  const create_newpost = (event) =>{
    setCreatpost(!createpost);
    event.preventDefault();
  }
  useEffect(() => {
    makeApiCall();
  }, [makeApiCall]);
  const dj= createpost ? <Createpost/> : null 
  return (
    <Layout>
      <AddIcon  onClick={create_newpost} style={{ fontSize: 100 } }/>
      {dj}
      <div className="col-md-6 offset-md-3">
        <ToastContainer /> 
        <ul>
          {!users.length ? (
            <li>No users have signedup.</li>
          ) : (
            users.map((user) => <li key={user._id}><RecipeReviewCard updatelike={updatelike} user={user}/></li>)
          )}
        </ul>
        <button className="btn btn-primary" onClick={makeApiCall}>
          Make API Call
        </button>
       <form>
            <input type="file" name="myImage" onChange={handleUpload}/>
            <button type="button" className="btn btn-primary" onClick={onUpload}>Upload</button>
      </form>
      </div>
    </Layout>
  );
  }
export default Dashboard;
