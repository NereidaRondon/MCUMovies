import React, {useState} from 'react';

  export default function Counter(){
    const [count, setCount]=useState(()=>{
        return 0})
 
        const increment=()=>{
          setCount(prevCount => prevCount + 1)
        }
        const decrement=()=>{
          setCount(prevCount => prevCount - 1)
        }
        return(
              <div className="counter">
                <button onClick={decrement}>-</button>
                <h1 className="count">{count}</h1>
                <button onClick={increment}>+</button>
              </div>

            );
}
