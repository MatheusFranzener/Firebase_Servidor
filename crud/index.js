
const { initializeApp } = require('firebase/app');
const { getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    query,
    deleteDoc }
 = require('firebase/firestore/lite');
const { createTestScheduler } = require('jest');

const firebaseConfig = {
    apiKey: "AIzaSyBX8_UmgHd1-FATaiiH3mPAb5BJNtxa1EQ",
    authDomain: "first-database-access-matheus.firebaseapp.com",
    projectId: "first-database-access-matheus",
    storageBucket: "first-database-access-matheus.appspot.com",
    messagingSenderId: "1003535034214",
    appId: "1:1003535034214:web:7425680ac4578b302ccaa7",
    measurementId: "G-HK7D5PW7W9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(); // fazendo a conexão com o firestore

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado, // pegar todas as propriedades da variavel dado e jogando na variável savedData
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef)

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
        console.log(doc.id, " => ", doc.data());
    });
    return lista;
}

async function getById(nomeTabela,id){
    const docRef = doc(db,nomeTabela,id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data();
    } else {
        return new Error("Not found");
    }
}

async function remove(nomeTabela,id){
    const dado = await deleteDoc(doc(db,nomeTabela,id));
    return {
        message: `${id} deleted`
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}