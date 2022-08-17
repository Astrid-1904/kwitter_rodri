//aqui inicia la pagina
//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyBHbuIEgkujUtiOL_8slGDtunxeX-DRNHk",
      authDomain: "kwitter-6625a.firebaseapp.com",
      databaseURL: "https://kwitter-6625a-default-rtdb.firebaseio.com",
      projectId: "kwitter-6625a",
      storageBucket: "kwitter-6625a.appspot.com",
      messagingSenderId: "25500562667",
      appId: "1:25500562667:web:31b3a946caf95a5e50baae"
    };

    firebase.initializeApp(firebaseConfig);
   
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
  
      document.getElementById("msg").value = "";
    }

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
//Inicia código

//Termina código
      } 
    });  
  }); 
}
getData();
