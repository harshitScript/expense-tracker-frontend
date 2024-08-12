import axios from "axios";
import store from "../store";

/* let USER_ID: string;
let AUTH_TOKEN: string;
 */

function listener() {
    console.log('store updated')
}

store.subscribe(listener)



const API = axios.create({
    timeout: 100000 //10sec
})


export default API;