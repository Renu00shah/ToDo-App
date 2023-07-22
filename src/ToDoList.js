import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


const ToDoList = (props) => {
    const styles = {
        close: {
            // cursor: 'pointer',
            // width: '20px',
            // height: '20px',
            // display: 'flex',
            // flexDirection: 'column',
            // marginLeft: '10px',
            // marginRight: '10px',
            // justifyContent: 'center',
            borderRadius:'70%',
            // alignItems: 'center',
            color: 'white',
            backgroundColor:'blueviolet',
            '&:hover': {
                backgroundColor: 'red',
            }
        }
    }


    return (
        <>
            <div className="style" style={{display:"flex",alignItems:"center"}}>
                    <IconButton sx={{marginRight:"10px"}} onClick={()=>props.handleRemoveItem(props.text)}>
                    <CloseIcon sx={styles.close} />
                    </IconButton>
                <li>
                    {props.text}
                </li> 
                </div>
            </>
  )
}

export default ToDoList
