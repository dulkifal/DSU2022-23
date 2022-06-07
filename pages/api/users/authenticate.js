import initFirebase from '../../../utils/config';
import { DocumentSnapshot, getFirestore } from "firebase/firestore";
const db = getFirestore(initFirebase());

import { collection, getDocs, addDoc, query, where} from "firebase/firestore";


const jwt = require('jsonwebtoken');
import getConfig from 'next/config';

import { apiHandler } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

// users in JSON file for simplicity, store in a db for production applications
const users = require('data/users.json');

export default apiHandler(handler);

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function authenticate() {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);
        // console.log(user);
        var updatedUser = await updataUser(user)
        if (!user) throw 'Username or password is incorrect';
    
        // create a jwt614614614 token that is valid for 7 days
        const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });
        // return basic user details and token
        const response = {
            id: updatedUser.id,
            username: updatedUser.username,
            name: updatedUser.Name,
            president: updatedUser.president ?? false,
            secretary: updatedUser.secretary ?? false,
            treasurer: updatedUser.treasurer ?? false,
            token
        };
        console.log(response);
        return res.status(200).json(response);
    }

    
}

async function updataUser(user){
    try { 
        const q = query(collection(db, "users"), where("id", "==", user.id));
        const querySnapshot = await getDocs(q);
        console.log("Check");
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].data();
        } else {
            const docRef = await addDoc(collection(db, "users"), user);
            console.log("Document written with ID: ", docRef.id);
            return {
                id: user.id,
                username: user.username,
                name: user.Name,
            };
        } 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}