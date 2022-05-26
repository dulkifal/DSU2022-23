import initFirebase from '../utils/config';
import { getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());
import { collection, addDoc,getDocs, doc ,increment, updateDoc } from "firebase/firestore";


import { useState, useEffect } from "react";

import { userService } from "services";
import Image from "next/image";


export default Home;

  function Home() {
 
  const [users, setUsers] = useState(null);
  const [votes, setVotes] = useState({
    president1: 0,
    president2: 0,
    secretary1: 0,
    secretary2: 0,
    treasurer1: 0,
    treasurer2: 0,
  });

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  return (
    <div className="mx-auto">
      <div className="card mt-4">
        <div className="card-body m-auto row">
          <h1 >  Live Result </h1>
          <button className="btn bg-primary text-white mx-5"
            
            onClick={async () =>{
             const querySnapshot = await getDocs(collection(db, "votes"));
            querySnapshot.forEach((doc) => {
              console.log(doc.data());
        
              setVotes({
                president1: doc.data().president1,
                president2: doc.data().president2,
                secretary1: doc.data().secretary1,
                secretary2: doc.data().secretary2,
                treasurer1: doc.data().treasurer1,
                treasurer2: doc.data().treasurer2,
              });
            });
          }
          }
          
          >Check </button>
        </div>
      </div>

      <div className="card m-3 ">
        <h1 className="text-center pt-3 ">Presidential Candidates</h1>

        <div className="card-body d-flex flex-row justify-content-around">
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card hjhjtitle</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: {votes.president1}
            </a>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: { votes.president2}
            </a>
          </div>
        </div>
      </div>
      <div className="card m-3">
        <h1 className="text-center pt-3">Secretary Candidates</h1>

        <div className="card-body d-flex flex-row justify-content-around">
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: { votes.secretary1}
            </a>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: { votes.secretary2}
            </a>
          </div>
        </div>
      </div>
      <div className="card m-3 ">
        <h1 className="text-center pt-3">Treasurer Candidates</h1>
        <div className="card-body d-flex flex-row justify-content-around">
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: { votes.treasurer1}
            </a>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <a href="#" className="btn btn-block btn-primary">
              Votes: { votes.treasurer2}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}


// const readData = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "votes"));
//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());

//       setVotes({
//         president1: doc.data().president1,
//         president2: doc.data().president2,
//         secretary1: doc.data().secretary1,
//         secretary2: doc.data().secretary2,
//         treasurer1: doc.data().treasurer1,
//         treasurer2: doc.data().treasurer2,
//       });
//       console.log(`${doc.id} => ${doc.data().president1 }`);
//     });
//   } catch (e) {
//     console.error("Error getting document:", e);
//   }
// };
