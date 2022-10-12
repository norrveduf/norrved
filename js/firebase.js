import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDTv6mys19M24Wgrcw_mfFsH-qoqnh25eI",
    authDomain: "slutuppgift-webb.firebaseapp.com",
    projectId: "slutuppgift-webb",
    storageBucket: "slutuppgift-webb.appspot.com",
    messagingSenderId: "715175891439",
    appId: "1:715175891439:web:74982fee60c83c9b76261a",
    measurementId: "G-2D57P24HEN",
    databaseURL: "https://slutuppgift-webb-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db);

async function writeData(userId, firstname, surname, date = null) {
    await set(ref(db, 'edsburgers/reservations/' + userId), {
        firstname: firstname,
        surname: surname,
        date: date
    });
}

function readData() {
    return get(child(dbRef, 'edsburgers/reservations/')).then((snapshot) =>  {
        if(snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }).catch((error) => {
        console.error(error);
    });
}

async function checkAvailableId() {
    var id = 0;
    const data = await readData(); 
    for(let reservation in data) {
        id++;
        console.log(data[reservation]);
    }

    return id;
}



$('#reservation-form').submit(function () {
    Reserve();
    return false;
});

const reservationApp = Vue.createApp({
	data() {
		return {
			dates: "",
            trigger: 0
		}
	},

	methods: {
        async GetData() {
            this.dates = await readData();
            console.log(this.dates);
        },

        Trigger() {
            this.trigger += 1;
        }
	},

    async mounted() {
        this.dates = await readData();
    }
}).mount('#reservations');

async function Reserve() {
    var availableId = await checkAvailableId();
    var firstname = $("#first-name").val();
    var surname = $("#last-name").val();
    var date = $("#date").val();

    
    await writeData(availableId, firstname, surname, date);
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("date").value = "";
    reservationApp.Trigger();
}