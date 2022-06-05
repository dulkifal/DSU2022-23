import initFirebase from '../utils/config';
import { getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());

import { collection,getDocs } from "firebase/firestore";

import { useState } from 'react/';

const arr = []

export default  function votter() {
  const [arrs , setarr] = useState([]);
   
  return (
    <div>
      <h1>Votters</h1>
      <p>who votted</p>
      <button
        onClick={async () => {
          const users = await getDocs(collection(db, "users"));
          users.forEach((user) => {
            arr.push(user.data())
             
          
          });
          // console.log(arr)
          setarr(arr)
        }}
      >Get Total</button>
      {           
         console.log(arrs) &
        arrs.forEach(user => (
          console.log(user.Name)&
          <table className="table">
            <tr>
              <td>{user.Name}</td>
              <td>{user.sem}</td>
              <td>{user.id}</td>
            </tr>

          </table>
        ))
      }
    

    </div>

  );
}

async function getVotter(){
  const users = await getDocs(collection(db, "users"));
  return users

}