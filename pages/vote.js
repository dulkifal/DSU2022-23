import initFirebase from '../utils/config';
import { getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());
import { useState } from 'react/';

 // Required for side-effects

import { collection, addDoc,getDocs, doc ,increment, updateDoc } from "firebase/firestore";


export default function () {
 const [one,setOne] = useState(false);
   
  return (
    <div>
      <h1>Vote</h1>
      <p>This is the vote page</p>
      <button  disabled={one} onClick={
        
        () => updateData1()& setOne(true)
        
      }>vote1</button>
       <button  disabled={one} onClick={
         
         () => updateData2()& setOne(true)
         
       }>vote2</button>
       
    </div>
  )
}
 

const addData = async () => {
  
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const readData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      
      console.log(`${doc.id} => ${doc.data().name }`);
    });
  } catch (e) {
    console.error("Error getting document:", e);
  }
};

const updateData1 = async () => {
  
  try {
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
   
      console.log(`${doc.id} => ${doc.data().name }`);
    });
    await updateDoc(doc(db, "votes", "president 1"), {
      name:  increment(1)
     
    });
    console.log("Document updated with ID: ", doc.id);
   
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

const updateData2 = async () => {
  
  try {
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
   
      console.log(`${doc.id} => ${doc.data().name2 }`);
    });
    await updateDoc(doc(db, "votes", "president 1"), {
      name2:  increment(1)
     
    });
    console.log("Document updated with ID: ", doc.id);
    
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}