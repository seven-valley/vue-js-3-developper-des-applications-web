# TP 07 Liste des séries

App.vue

```vue
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faTrash, faMagnifyingGlass)
import { ref, onMounted} from 'vue'

const serie = ref("star");
const series = ref([]);
const fav = ref([]);
const key = "efdc2275";
const url = `http://www.omdbapi.com/?apikey=${key}&type=series`;
const chercher = async () => {
  const url2 = `${url}&s=${serie.value}`;
  const r = await fetch(url2);
  const data = await r.json();
  console.log(data.Search);
  series.value = data.Search;
}
const ajouter = async (i) => {
  const imdbID = series.value[i].imdbID;
  const url2 = `${url}&i=${imdbID}`;
  const r = await fetch(url2);
  const serie = await r.json();
  fav.value.push(serie);
  localStorage.setItem("fav", JSON.stringify(fav.value));
}
const enlever = (i) => {
  fav.value.splice(i, 1);
  localStorage.setItem("fav", JSON.stringify(fav.value));
}
onMounted(() => {
  const data = localStorage.getItem("fav");
  if (data) {
    fav.value = JSON.parse(data);
  }
})
</script>

<template>
  <div class="container mt-4">
    <div class="row" id="app">
      <div class="col-4">
        <div class="row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Nom de la série" v-model="serie" />
          </div>
          <div class="col-2">
            <button class="btn btn-success" @click="chercher">
              <font-awesome-icon icon="magnifying-glass" />
            </button>
          </div>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Séries</th>
              <th>Année</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(serie, i) in series" :key="i">
              <td>{{ serie.Title }}</td>
              <td>{{ serie.Year }}</td>
              <td>
                <img :src="serie.Poster" :alt="serie.Title" alt="Upload" width="80" />
              </td>
              <td class="align-middle">
                <button class="btn btn-outline-secondary" @click="ajouter(i)">
                  <font-awesome-icon icon="plus" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="offset-3 col-4">
        <h1>Séries à regarder :</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Séries</th>
              <th>Année</th>
              <th>rating</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(serie, i) in fav" :key="i">
              <td>{{ serie.Title }}</td>
              <td>{{ serie.Year }}</td>
              <td>{{ serie.imdbRating }}</td>
              <td>
                <img :src="serie.Poster" :alt="serie.Title" width="80" />
              </td>
              <td class="align-middle">
                <button class="btn btn-outline-danger" @click="enlever(i)">
                  <font-awesome-icon icon="trash" />
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped></style>

```