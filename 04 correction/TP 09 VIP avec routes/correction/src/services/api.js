import axios from "axios";

const url = 'https://vip-rennes-default-rtdb.europe-west1.firebasedatabase.app/';
const noeud = 'personnes';

export const getGuests = async () => {
    let url2 = `${url}${noeud}.json`
    const response = await axios.get(url2);
    return response.data;
}

export const getGuest = async (id) => {
    let url2 = `${url}${noeud}/${id}.json`
    const response = await axios.get(url2)
    return response.data;
}

export const addGuest = async (personne) => {
    let url2 = `${url}${noeud}.json`
    const response = await axios.post(url2, personne);
    personne.id = response.data.name;
    return personne;
}

export const updateGuest = async (id, data) => {
    console.log('a')
    let url2 =  `${url}${noeud}/${id}.json`
    //let data = { present: true};
    await axios.patch(url2, data);
    return;
}

export const removeGuest = async (id) => {
    let url2 =  `${url}${noeud}/${id}.json`
    await axios.delete(url2);
    return;
}