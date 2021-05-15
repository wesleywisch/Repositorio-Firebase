// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// var firebaseConfig = {
//   apiKey: "AIzaSyCYBUMopklnRyJ5UJRuA6fB9cmAgyxc8WQ",
//   authDomain: "projeto-teste-bea9e.firebaseapp.com",
//   projectId: "projeto-teste-bea9e",
//   storageBucket: "projeto-teste-bea9e.appspot.com",
//   messagingSenderId: "86138275008",
//   appId: "1:86138275008:web:e689a7844b5d8ba6805925",
//   measurementId: "G-P294ZVNFYD"
// };


// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const TURMA = "turmaA"
// let firestore = firebase.firestore();

// function ler() {
//   firestore.collection("turmaA").get().then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.data());
//     })
//   }).catch(error => {
//     console.log(error)
//   })
// }

// ler();


































































// let auth = firebase.auth()



// criando um usuario

// function criarUsuario(){

// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc"

// let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//     .then(user =>{
//       console.log(user);
//     }).catch(err =>{
//       console.log(err);
//     })
// }


// gerenciando logins


//logando

// function login() {
//   let = userEmail = "novoteste@teste.com"
//   let userPassword = "123abc"

//   auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>{
//     auth.signInWithEmailAndPassword(userEmail, userPassword)
//     .then(loggedUser => {
//       console.log(auth.currentUser)
//     }).catch(err => {
//       console.log(err)
//     })
//   }).catch(error =>{
//     console.log(error);
//   })


// }
// login();

  //verificando se esta logando ou nao

// auth.onAuthStateChanged(user => {
//   if(user){
//     console.log(user)
//   }else{
//     console.log("Ninguem logado")
//   }
// })

//deslogando o usuario

// function logout(){
//   auth.signOut().then(() =>{
//     console.log("Usuário foi deslogado")
//   }).catch(error =>{
//     console.log(error)
//   })
// }

// setTimeout(login, 2000);


// criando e alterando documentos

// firestore.collection(TURMA).add({
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: {nota1: 9.6, nota2: 7.5},
// }).then((doc) => {
//     console.log("Documento inserido com sucesso", doc)
// }).catch((err) => {
//     console.log(err);
// })

// alterando o documento

// firestore.collection(TURMA).doc("AlunoNovo").update({


//     faltas: firebase.firestore.FieldValue.increment(5)


// }).then((doc) => {
//     console.log("Documento inserido com sucesso", doc)
// }).catch((err) => {
//     console.log(err);
// })






  // ler todos os dados da coleção

// firestore.collection("turmaA").onSnapshot((snapshot) =>{

//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno)
//     });

// })



// let docRef = firestore.collection("turmaA").doc("lERTzjWhwZr0O5gI6K5O");

// docRef.onSnapshot((doc) => {
//     console.log(doc.data());
// })

// firestore.collection("turmaA").where("nome", "==", "Pedro").get()
// .then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.sobrenome)
//     });
// })


// apagando campos e documentos.

// apagando um campo

// firestore.collection(TURMA).doc("AlunoNovo").update({


//     cidades: firebase.firestore.FieldValue.delete()


// }).then((doc) => {
//     console.log("Documento inserido com sucesso", doc)
// }).catch((err) => {
//     console.log(err);
// })


// apagando um documento

// firestore.collection(TURMA).doc("AlunoNovo").delete().then((doc) => {
//     console.log("Documento apagando com sucesso", doc)
// }).catch((err) => {
//     console.log(err);
// })