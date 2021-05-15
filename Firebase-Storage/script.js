var firebaseConfig = {
    apiKey: "AIzaSyCCLkgsbXwUsXlD_m2Emryo8mGD0zb3xlo",
    authDomain: "projeto-links-cdb00.firebaseapp.com",
    projectId: "projeto-links-cdb00",
    storageBucket: "projeto-links-cdb00.appspot.com",
    messagingSenderId: "173583305000",
    appId: "1:173583305000:web:87d08868b6fbc9d302681d",
    measurementId: "G-EZH45TGKCE"
};
firebase.initializeApp(firebaseConfig);


    // referencias

const storage = firebase.storage();

// const ref = storage.ref();
// const refImage = storage.ref("/images");
// const fileRef = refImage.child("paisagem2.jpg");

// const fileParent = fileRef.parent.parent;

// refImage.listAll().then(res =>{
//     console.log(res.items);
//     res.items[0].getDownloadURL().then(url=>{
//         console.log(url);
//     });
// });

// fileRef.getDownloadURL().then(url=>{
//     console.log(url);
// });

// fileParent.listAll().then(res=>{
//     console.log(res);
// });


// refImage.parent.child("paisagem.jpg").getDownloadURL().then(url=>{
//     console.log(url);
// });

// refImage.root.listAll().then(res =>{
//     console.log(res);
// });


    // upload

// const refImage = storage.ref("/images");
// const fileInput = document.getElementById("fileInput");

// fileInput.addEventListener("change", (e)=>{

//     const file = e.target.files[0];
//     refImage.child(file.name).put(file).then((snapshot)=>{
//         console.log(snapshot);
//     });
// });


    // upload de arquivo convertido

// const refImage = storage.ref("/images");

// const fileBase64 = '' // dentro as aspas colocar o arquivo base 64 em string

// refImage.child("Foto.jpg").putString(fileBase64, "base64").then(snapshot =>{
//     console.log(snapshot)
// })


    //Metadados

// const refImage = storage.ref("/images");

// const newMetaData = {
//     contentType: "image/jpeg",
// }


// refImage.child("Foto.jpg").updateMetadata(newMetaData).then(metaData=>{
//     console.log(metaData)
// }).catch(err=>{
//     console.log(err);
// })