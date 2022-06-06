import initFirebase from "../utils/config";
import { getDoc, query, where, getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());

import { useState, useEffect } from "react";

import { userService } from "services";
import Image from "next/image";
import { Logout } from "components/logout";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";

export default Home;

function Home() {
  const [one, setOne] = useState(JSON.parse(localStorage.getItem("user"))["president"] ?? false);
  const [two, setTwo] = useState(JSON.parse(localStorage.getItem("user"))["secretary"] ?? false);
  const [three, setThree] = useState(JSON.parse(localStorage.getItem("user"))["traserur"] ?? false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);
    
  // console.log(users)

  return (
    <div className="mx-auto">
      <div className="card mt-4">
        <div className="card-body m-auto">
          {users && (
            <ul>
              {/* {users.map((user) => (
              ))} */}
              <h1>Hi , You can choose your Leader</h1>
            </ul>
          )}
          {!users && <div className="spinner-border spinner-border-sm"></div>}
        </div>
      </div>

      <div className="card m-3 ">
        <h1 className="text-center pt-3 "> Presidential Candidates</h1>

        <div className="card-body d-flex flex-row justify-content-around">
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card hjhjtitle</h5>
            <button
              className="btn btn-block btn-primary"
              disabled={one}
              onClick={() => {
                votePresident1() & setOne(true);
              }}
            >
              Vote
            </button>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <button
              className="btn btn-block btn-primary"
              onClick={() => {
                votePresident2() & setOne(true);
              }}
              disabled={one}
            >
              Vote
            </button>
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
            <button
              className="btn btn-block btn-primary"
              disabled={two}
              onClick={() => {
                voteSecretary1() & setTwo(true);
              }}
            >
              Vote
            </button>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <button
              className="btn btn-block btn-primary"
              disabled={two}
              onClick={() => {
                voteSecretary2() & setTwo(true);
              }}
            >
              Vote
            </button>
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
            <button
              className="btn btn-block btn-primary"
              disabled={three}
              onClick={() => {
                voteTraserur1() & setThree(true);
              }}
            >
              Vote
            </button>
          </div>
          <div>
            <Image
              src="/sample-avatar.jpg"
              className="w"
              width={200}
              height={200}
            />
            <h5 className="card-title">Card title</h5>
            <button
              className="btnvote btn btn-block btn-primary "
              disabled={three}
              onClick={() => {
                voteTraserur2()
                 &  setThree(true) 

                ;
              }}
            >
              Vote
            </button>
          </div>
        </div>
      </div>
      <Logout/>
      
    </div>
  );
}

const votePresident1 = async () => {
  try {
    storeVotesInUser("president");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      president1: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const votePresident2 = async () => {
  try {
    storeVotesInUser("president");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      president2: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const voteSecretary1 = async () => {
  try {
    storeVotesInUser("secretary");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      secretary1: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const voteSecretary2 = async () => {
  try {
    storeVotesInUser("secretary");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      secretary2: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
const voteTraserur1 = async () => {
  try {
    storeVotesInUser("traserur");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      treasurer1: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
const voteTraserur2 = async () => {
  try {
    storeVotesInUser("traserur");
    const querySnapshot = await getDocs(collection(db, "votes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name2}`);
    });
    await updateDoc(doc(db, "votes", "candidates"), {
      treasurer2: increment(1),
    });
    console.log("Document updated with ID: ", doc.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
async function storeVotesInUser(key) {
  const user = JSON.parse(localStorage.getItem("user")); 
  const q = query(collection(db, "users"), where("id", "==", user.id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((document) => {
    // doc.data() is never undefined for query doc snapshots
    updateDoc(doc(db, "users", document.id), {
      [key]: true
    }).then((value) => {
      user[key] = true
      localStorage.setItem("user", JSON.stringify(user));
    });;
  })
  console.log(user);
}