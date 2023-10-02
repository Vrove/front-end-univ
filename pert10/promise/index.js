import helloWorld from "./helloWorld.js";
import ambilDataUser from "../fetch/ambilDataUser.js";
import ambilDataUserAsync from "../async-await/ambilDataUserAsync.js";

const messages = async () => { 
    const msg = await helloWorld
    console.log(msg)
}

messages()
ambilDataUser()
ambilDataUserAsync()