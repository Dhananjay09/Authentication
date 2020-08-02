import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import axios  from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { green } from '@material-ui/core/colors';
const CreatePost=() =>{
    
    const [name, setName]=useState() 
    const [email, setEmail]=useState() 
    const [pin, setpin]=useState() 
    const [product, setProduct]=useState() 
    const [address, setAddress]=useState() 
    const CreateNewPost = (event) => {
      if(name && email && pin && product && address){
        console.log(name+ email+ pin+ address+ product);
        axios.post("users/add-post", {name : name, email : email, pin : pin, product: product, address : address}).then(res=>{
          toast.success("Succesfully Created");
        }).catch((err)=>{
          toast.error("Error Occured");
        })
      }
      event.preventDefault()
    }
    return (
        <Form style={{color: green}}>
        <legend>New Post</legend>
        <Input placeholder="Name" onChange ={(e) => setName(e.target.value)} />
        <Input placeholder="Email" onChange ={(e) => setEmail(e.target.value)}/>
        <Input placeholder="PIN"  onChange ={(e) => setpin(e.target.value)}/>
        <Input placeholder="Product" onChange ={(e) => setProduct(e.target.value)}/>
        <Textarea placeholder="Address" onChange ={(e) => setAddress(e.target.value)} />
    <Button onClick={CreateNewPost} variant="raised">Add Post</Button>
      </Form>
    )
}
export default CreatePost;