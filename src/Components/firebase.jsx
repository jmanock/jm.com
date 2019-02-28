import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
	apiKey: "AIzaSyDFBhLrcvMdtYf89K_GhqC3_D-d0nME0dQ",
	authDomain: "dogbite-1fbb1.firebaseapp.com",
	databaseURL: "https://dogbite-1fbb1.firebaseio.com",
	projectId: "dogbite-1fbb1",
	storageBucket: "dogbite-1fbb1.appspot.com",
	messagingSenderId: "359687557423"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export{
	storage, firebase as default
};
