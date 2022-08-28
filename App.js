import logo from './logo.svg';
import './App.css';
//import React from 'react';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
function App()
{
 return "welcome to react";
}
export default App;
*/
/*
function Gowtham()
{
  
  return(
    <>
     <h2>React App Name changed</h2>{k}
     <h1>welcome to multiline statement</h1>
     <marquee>this is line3 statement</marquee>
     <marquee behavior="alternate" bgcolor="red">
       <font color="white" size="7">Gowthaman</font></marquee>
     </>
  );
}
export default Gowtham;
*/
/*
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide]; 
}

function Test()
{
  const uname="gowthaman";
  const password="password@123";
  const myArray = ['apple', 'banana', 'orange'];
  const myList = myArray.map((item) => <p>{item}</p>)

  const vehicles = ['mustang', 'f-150', 'expedition'];
  const [car, truck, suv] = vehicles;
  const [data1,,]=vehicles;
  const [add, subtract, multiply, divide] = calculate(4, 7);
  const myelement = (
    <table border="2">
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  return(
    <>
      <h1>User Name:{uname}</h1>
      <h1>password : {password}</h1>
      <h1>array 1 : {myArray[0]}</h1>
      {myList}
      {add}{subtract}{multiply}{divide}
    {car}{data1}
    {myelement}
    </>
  );
}
export default Test;

*/
/*
function Gowtham()
{
  const myarry=["vasanth","karthi","gowtham","surya"];
  return(
    <>
    <h1>name1: {myarry[0]}</h1>
    <h1>name2 :{myarry[1]}</h1>
    <h1>name3 : {myarry[2]}</h1>
    <h1>name4 : {myarry[3]}</h1>    
    </>
  );
}
export default Gowtham;
*/
/*
function Gowtham()
{
  const myarry=["vasanth","karthi","gowtham","surya"];

  const myList=myarry.map((item)=><h1>{item}</h1>)
  return(
    <>
    <h1>Array Result - map method (looping)</h1>
      {myList}
    </>
  );
}
export default Gowtham;
*/
/*
class Student extends React.Component 
{
  render()
  {
    return <h1><font color="red"> Welcome to class components</font></h1>
  }
}


class Testing extends Student
{
  render()
  {    
    return( 
      <>
      <Student/>
      <h1>This is derive class</h1>;
      </>
    );
  }
}
class Teacher extends Testing
{
  render()
  {   
    return( 
    <>
    <Testing/>
    <h2>Multi Level implemented</h2>
    </>
    );
  }
}
export default Teacher;
*/

import React from 'react';
class Emp extends React.Component
{
  constructor()
  {
    super();
    this.state={rno:1,
      name:"gowthaman",
      mark:{tamil:99,eng:99,mat:100,sci:98,soc:55},
      res:'pass'
    };
  }
  render()
  {
    return( 
      <>
    <h1>Rno:{this.state.rno}</h1>
    <h1>Name:{this.state.name}</h1>
    <h1>tamil Mark:{this.state.mark.tamil}</h1>
    <h1>english Mark:{this.state.mark.eng}</h1>
    <h1>maths Mark:{this.state.mark.mat}</h1>
    <h1>science Mark:{this.state.mark.sci}</h1>
    <h1>social Mark:{this.state.mark.soc}</h1>
    <h1>Result:{this.state.res}</h1>
    </>
    );
  }
}
export default Emp;

/*
import React from 'react';
class College extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={myname:this.props.name};
  }
  changeName=()=>{
    this.setState({myname:"karur"});
  }
  render()
  {
   return( 
   <>
   <h1>{this.props.name}</h1>;
   <h1>{this.state.myname}</h1>
   <button onClick={this.changeName}>Change Name</button>
   </>
   );
  }
}
export default College;
*/
/*
import React from 'react';
class Test extends React.Component
{
    render()
  {
    const x=20;
    let ans="not eligible to vote";
    if (x>=18)
    ans="eligible to vote";
    return <h1>{ans}</h1>;
  }
}
export default Test;
*/
/*
import React from 'react';
class Test extends React.Component
{
  render()
  {
    const x=1900;
    const y=2100;
    const z=900;
    let res=<h1>{x>y && x>z?x:(y>z?y:z)}</h1>
    return <h1>Biggest Number:{res}</h1>;
  }
}
export default Test;
*/
/*
function SNames(props)
{
return  <li>{props.name} </li>;
}

function RlistDemo()
{
const myarr=["gowtham","gowthaman","surya"];
return(
	<>
	<h1> Student List </h1>;
	<ol>
{myarr.map((item)=><SNames name={item}/>)}
	</ol>

	</>
);
}
export default RlistDemo;

*/
/*
const myfun=()=>
{
  var un=document.getElementById("un").value;
  var pw=document.getElementById("pw").value;
  if (un=="gowthaman" && pw=="password@123")
  {
    alert("Success")
  }
  else
  {
    alert("Failure");
  }
}
function RFormsDemo()
{
  return(
    <>
    <label>Enter User Name :
      <input type="text" id="un"></input></label>
    <br></br>
    <label>Enter Password : 
      <input type="password" id="pw"></input></label>
    <br></br>
    <input type="button" onClick={myfun} value="Login"></input>
    </>
  );
}
export default RFormsDemo;*/
/*

import { useState } from "react";
function LoginFunction()
{
    const[name,setName]=useState("SABARI");
    const handleSubmit = (event) => {
        event.preventDefault();  // page without refresh
        alert('The name you entered was: '+name);
      }
      const mycall=(e)=>
      {
        setName(e.target.value)
      }
return(
    <>
    <form onSubmit={handleSubmit}>
    <h1>React forms handling Events</h1>
    <label>Enter Your Name:
        <input type="text" value={name}
         onChange={mycall}>

         </input>
    </label>
    <input type="submit"></input>
    </form>
    </>
);
}
export default LoginFunction;
*/