import  { useState } from 'react';
import MyInput from './MyInput';
import MyButton from './MyButton';

const Postform = ({create}) => {
    const [post,setPost]= useState({title:'',body:''});

    const addNewPost = (e)=>{
        e.preventDefault();
        const newPost = {
            ...post,id:Date.now()
        }
        create(newPost);
        setPost({title:'',body:''})
      }
    return (
        <form>
        <MyInput
           value = {post.title} 
           onChange ={(e)=>setPost({...post,title:e.target.value})}
           type = 'text'
           placeholder ='your text'
        />
         <MyInput
           value = {post.body} 
           onChange ={(e)=>setPost({...post,body:e.target.value})}
           type = 'text'
           placeholder ='your text'
        />
        <MyButton onClick = {addNewPost}>Add Posts</MyButton>
      </form>
    );
};

export default Postform;