const firebaseConfig = {
    apiKey: "AIzaSyDBsiF7T6zcy0KHKS75YeNvQNqQsldSREA",
    authDomain: "contactme-1b428.firebaseapp.com",
    databaseURL: "https://contactme-1b428-default-rtdb.firebaseio.com",
    projectId: "contactme-1b428",
    storageBucket: "contactme-1b428.appspot.com",
    messagingSenderId: "769709974382",
    appId: "1:769709974382:web:498a9bf63733dc6719d77f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference your database
const contactFormDB=firebase.database().ref("ContactMe")

/**
 * form id = BasicForm
 * name->name
 * email->email
 * phone->phone
 * message->message
 */

document.getElementById("ContactMe").addEventListener("submit",submitForm);
console.log("it came till here")

function submitForm(e){
    e.preventDefault();
    var name=getElementVal("name");
    var email=getElementVal("email");
    var phone=getElementVal("phone");
    var message=getElementVal("message");
    console.log(name,email,phone,message)
    saveMessages(name,email,phone,message)
}
const saveMessages=(name,email,phone,message)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
        phone:phone,
        message:message,
    });
}

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};
