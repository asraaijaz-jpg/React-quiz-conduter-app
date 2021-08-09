import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button , Card , Col, ListGroup , ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from './data';
import { FormControl  , FormLabel , RadioGroup , FormControlLabel , Radio} from '@material-ui/core';


function Questions ()
{
  
const arry=[];
const correct=0;
const incorrect=0;

  const [getid,setid]=useState(0);
  const [getq,setq]=useState(0);
  const [getop,setop]=useState(0);
  const [geta,seta]=useState(0);
  const [gets,sets]=useState(0);
  const [getc,setc]=useState(0);
  const [geti,seti]=useState(0);

  function submit()
  {
    return(alert(`Correct answers are : ${getc} , Incorrect answers are ${geti}` ))
  }

  function next()
  {
    if(getid==4 && getq==4 && getop==4)
    {
      alert('question bank is empty');
    }    else{
    setid(getid+1);
    setq(getq+1);
    setop(getop+1);
    seta(geta+1);
    sets(gets+1);
  
     }

  }

  function previous()
  {
    if(getid<=0 && getq<=0 && getop<=0)
    {
      alert('No question available proceed to next question');
    }
    else{
    setid(getid-1);
    setq(getq-1);
    setop(getop-1);
    seta(geta-1);
    sets(gets-1);

    }
  }

  function select1(para)
  {
    if(para.target.value === Collection[geta].answer)
    {
      Collection.status='correct'; 
      setc(getc+1);
    }
    else
    {
      Collection.status='incorrect';
      seti(geti+1);
    
       }
  }

  return(<div className='container p-5'> 
  <hr style={{backgroundColor:'green' , height:'3px'}}></hr> 
  <center><h3 style={{color:'red'}}><i><b>Quiz attempter app</b></i></h3></center>
<br></br><br></br><br></br>
<div className='row '>
  
  <div className='col-4 p-5' style={{width:'700px' , height:"430px" , border:'4px dotted black' , backgroundColor:" #F7BBD4  "}}>
    <br></br> <br></br> <br></br> <br></br> <br></br>
    <center><h3 style={{color:'red'}}><i><b>Quiz Questions Bank</b></i></h3></center>
  </div>
  <div className='col-2 offset-1' > 

 <div style={{width:'500px' , height:"430px" , border:'4px dotted black' , backgroundColor:"#CDE2F5 "}}>
   <br></br>
    <b> <p className='mx-5'>{Collection[getid].id}</p></b>
    <b> <p className='mx-5'>{Collection[getq].question}</p></b>
    <p className='mx-5'>{Collection[getop].options.map(function(getoptions , index){
     return(Object.values(getoptions).map((datainside)=>
     <p><RadioGroup >
     <FormControlLabel  id={index++}  value={datainside} onChange={select1.bind(this)} control={<Radio />} label={datainside} />
     </RadioGroup></p>));})}
     </p>

     
      <center> 
     <button className='m-3 btn btn-primary' variant="primary" onClick={next} type='button'>Next</button>
     <button className='m-3 btn btn-primary' variant="primary" onClick={previous} type='button'>Previous</button>
     <button className='m-3 btn btn-primary' variant="primary" onClick={submit} type='button'>Submit</button>
     </center>
  
 

     </div>
     
     </div>
     
</div>
<br></br>
<hr style={{backgroundColor:'green' , height:'3px'}}></hr> 
     </div>
)}
export default Questions;