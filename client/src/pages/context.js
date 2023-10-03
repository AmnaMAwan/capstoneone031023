// context.js
// context.js
import { createContext, useContext, useState ,createfunctionContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext(); 
export const UserDeposit=createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};


export const useDepositContext = () => {
  return useContext(UserDeposit);
};




export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '' }); // Initialize with an empty name
  const [deposit, setDeposit] = useState({ deposita: 0 });
  const updateUser = (newUser,newDeposit) => {
    setUser(newUser);
    setDeposit(newDeposit);
  };
  
  return (
    
<>
   




    <UserContext.Provider value={{ user, updateUser , deposit}}>
      {children}
    </UserContext.Provider>

 
</>


  );
};

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


  