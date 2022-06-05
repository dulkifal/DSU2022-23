import initFirebase from '../utils/config';
import { getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());

import { collection,getDocs } from "firebase/firestore";

import { useState } from 'react/';


export default  function votter(user) {
  
  return (
    <div>
      <h1>Votters</h1>
      <p>who votted</p>
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sem</th>

          </tr>
        </thead>
        <tbody>
          {user[0].map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Name}</td>
              <td>{user.sem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    

    </div>

  );
}


votter.getInitialProps = async (ctx) => {
  const user = await (await getDocs(collection(db, "users")))
  const arr = [];
  user.forEach(element => {
    // console.log(element.data());
    arr.push(element.data());
  });
  return  [arr];
    
  
};
 