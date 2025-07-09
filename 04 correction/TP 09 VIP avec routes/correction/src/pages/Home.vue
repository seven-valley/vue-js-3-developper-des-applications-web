<script setup>
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getGuests } from '../services/api'
const personnes = ref([])
const router = useRouter()

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


</script>

<template>

    <div class="container">
 
        <div class="row">
            <div class="col-4">
                <table class="table table-striped mt-4">
                    <tbody>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                         
                        </tr>
                        <tr :class="personne.status ? 'table-success' :'table-danger'" v-for="(personne, i) in personnes">
                            <td>{{ personne.prenom }}</td>
                            <td>{{ personne.nom }}</td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>