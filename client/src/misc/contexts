import React, { createfunctionContext, useState, useEffect } from "react";
import {HashRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//export const Route       = ReactRouterDOM.Route;
//export const Link        = ReactRouterDOM.Link;
//export const HashRouter  = ReactRouterDOM.HashRouter;
export const UserContext = React.createContext({name:'abel',email:'abel@mit.edu',password:'secret',balances:100});
export var   balcontext = React.createContext({balance:0});
//export const bal=useState(0);
//export const usersi = React.createContext({bal:10});
//export const num1=0;
//export const bal=0;



//export <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}></UserContext.Provider>

export function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  const increment =0;
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>  

      
    );    
    }

    export const Board = () => {
    const [squareOne, setSquareOne] = useState(0)
    const [squareTwo, setSquareTwo] = useState(0)
    const [squareThree, setSquareThree] = useState(0)
    const [squareFour, setSquareFour] = useState(0)


    return (
        <div className="board">
            <Square value={squareOne} increment={() => setSquareOne(squareOne + 1)} />
            <Square value={squareTwo} increment={() => setSquareTwo(squareTwo + 1)} />
            <Square value={squareThree} increment={() => setSquareThree(squareThree + 1)} />
            <Square value={squareFour} increment={() => setSquareFour(squareFour + 1)} />
        </div>
        
    );
};
  

export const Square = ({ value, increment }) => {
    return <button onClick={increment}>{value}</button>;
};

