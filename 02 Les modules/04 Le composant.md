https://vuejs.org/guide/components/events.html

## App.vue

```vue
<script setup>
import { ref } from 'vue'
import Personne from './components/Personne.vue'
const personnes = ref([
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Bob Smith", age: 35 },
])
const nom = ref('toto');
const enlever=(indice)=>{
  console.log(personnes.value)
  personnes.value.splice(indice,1);

//  console.log('mamam')
//    console.log(indice);

}
const ajouter=()=>{
  const p= { name: nom.value, age: 30 };
  personnes.value.push(p);
  nom.value='';
}
</script>

<template>

<input v-model="nom" placeholder="Nom">
<br>
<button @click="ajouter()">Ajouter</button>

<Personne 
v-for="(p,index) in personnes"
  :key="p.id"
  :indice="index"
  :personne="p"
  @sup="(indice)=> enlever(indice)"
></Personne>

</template>


```

#Personne.vue

```vue
<script setup>
const props = defineProps({
    personne: Object,
    indice: Number
})
const emit = defineEmits(['sup']);
const sup =()=>{
    //console.log(props.indice);
    emit('sup',props.indice);
}
</script>

<template>
    <h2>{{ indice }} - {{ personne.name }} {{ personne.age }}</h2>
    <button @click="sup()">Supprimer</button>
</template>
```