<script setup>


import { ref, onMounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { addGuest, getGuests, removeGuest,updateGuest } from '../services/api'
library.add(faPlus, faEdit, faTrash, faCheck)
const personnes = ref([])
const nom = ref('')
const prenom = ref('')

onMounted(async () => {
    const liste = await getGuests();
    const personnes2 = []
    for (let id in liste) {
        const personne = liste[id];
        personne.id = id
        personnes2.push(personne);
    }
    console.log(personnes2)
    personnes.value = personnes2

})


const ajouter = async () => {
    const personne = { prenom: prenom.value, nom: nom.value, status: true }
    const personne2 = await addGuest(personne)
    personnes.value.push(personne2)
}
const enlever = async (indice) => {
    const id = personnes.value[indice].id
    await removeGuest(id);
    personnes.value.splice(indice, 1)
}
const check = async (indice) => {
    const id = personnes.value[indice].id
    const data = { status: !personnes.value[indice].status }
    await updateGuest(id, data);
    personnes.value[indice].status = !personnes.value[indice].status
}





</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="bg-gris p-4">
                    <div class="row">
                        <div class="col-4">
                            <input aria-label="Prénom" class="form-control" placeholder="Prénom" v-model="prenom" />
                        </div>
                        <div class="col-4">
                            <input aria-label="Nom" class="form-control" placeholder="Nom" v-model="nom" />
                        </div>
                        <div class="col-1">
                            <button class="btn btn-success" @click="ajouter()">
                                <font-awesome-icon icon="plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-4">
                <table class="table table-striped mt-4">
                    <tbody>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th colspan="3">Actions</th>
                        </tr>
                        <tr :class="personne.status ? 'table-success' :'table-danger'" v-for="(personne, i) in personnes">
                            <td>{{ personne.prenom }}</td>
                            <td>{{ personne.nom }}</td>
                            <td>
                                <button class="btn btn-danger">
                                    <font-awesome-icon icon="trash" @click="enlever(i)" />
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-warning">
                                    <font-awesome-icon icon="check" @click="check(i)" />
                                </button>
                            </td>
                            <td>
                                <RouterLink class="btn btn-primary" :to="{ name: 'Modifier', params: { id: personne.id } }">
                                    <font-awesome-icon icon="edit" />
                                </RouterLink>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gris {
    background-color: #eee;
}
</style>