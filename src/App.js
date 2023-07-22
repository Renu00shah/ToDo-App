import {React, useState } from 'react';
import ToDoList from './ToDoList';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

function App() {
  const [item, setItem] = useState("")
  const [list,setList]=useState([])
  


  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleSubmit = () => {

    if (item === "") {
      alert("Please enter a item")
    } else {
      
      setList((oldItems) => {
        return [...oldItems,item]
      })
      setItem("")
    }
  }



  const handleRemoveItem = (item) => {
    setList((oldItems) => {
      return oldItems.filter((oldItem) => oldItem!== item)
    })



  }



  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>Todo List</h1>
          <br />          

          <input onChange={handleChange} value={item} type="text" placeholder="Add a Items" />
          <IconButton onClick={handleSubmit} sx={{
            backgroundColor: "blueviolet", color: "white",marginLeft:"15px", "&:hover": {
               backgroundColor: "blueviolet", color: "white",
            }
          }}> <Add/> </IconButton>

          <ol>
            {
              list.map((itemVal) => {
                return <ToDoList text={ itemVal} handleRemoveItem={handleRemoveItem} />
              })  

            }
          </ol>
        </div>
      </div>
    
    </>
  );
}

export default App;
