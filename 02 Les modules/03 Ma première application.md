# Mise en place de notre première application

# Etape 1
Le clique la fonction fléchée


# Etape 2
Manipuler des variables
```vue
<script setup>
import { ref } from 'vue'
const message = ref('hello');
const afficher = () => {
  message.value = 'bye';
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <h2>{{ message }}</h2>
  </div>
 
</template>

<style scoped>
h1 {
  color:tomato;
}
</style>
```

# Etape 3
La lecture du champ input
```vue
<script setup>
import { ref } from 'vue'
const message = ref('hello');
const valeur = ref('ola !');
const afficher = () => {
  message.value = valeur.value;
  valeur.value = ''; // vider input
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <input v-model="valeur">
    <h2>{{ message }}</h2>
  </div>
 
</template>

<style scoped>
h1 {
  color:tomato;
}
</style>

```
# Etape 4
```vue
<script setup>
import { ref } from 'vue'
const etat = ref(true);

const afficher = () => {
  etat.value = !etat.value;
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <p >{{ etat ? 'on' : 'OFF'}}</p>
  </div>
 
</template>

<style scoped>
.rouge {
  color:tomato;
}
</style>
```

# Etape 5
changer l attribut <code>class=</code> d'une balise html

```vue
<script setup>
import { ref } from 'vue'
const etat = ref(true);

const afficher = () => {
  etat.value = !etat.value;
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <p :class="{ rouge: !etat }">{{ etat ? 'on' : 'OFF'}}</p>
  </div>
 
</template>

<style scoped>
.rouge {
  color:tomato;
}
</style>
```

# Etape 6
2 classes
```vue
<script setup>
import { ref } from 'vue'
const etat = ref(true);

const afficher = () => {
  etat.value = !etat.value;
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <p :class="{ rouge: !etat, vert: etat }">{{ etat ? 'on' : 'OFF'}}</p>
  </div>
 
</template>

<style scoped>
.rouge {
  color:tomato;
}
.vert {
  color:green;
}
</style>

```

Binder un attribut
```vue
<div :class="[myClass]"></div>

<!-- this also works -->
<div v-bind:class="[myClass]"></div>
```

# Etape 7
```vue
<script setup>
import { ref } from 'vue'
const etat = ref(true);
const myClass = ref('vert');
const afficher = () => {
  etat.value = !etat.value;
  if (etat.value) {
    myClass.value = 'vert';
  } else {
    myClass.value = 'rouge';
  }
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <p :class="[myClass]">{{ etat ? 'on2' : 'OFF'}}</p>
  </div>
 
</template>

<style scoped>
.rouge {
  color:tomato;
}
.vert {
  color:green;
}
</style>
```


# Etape 8
```vue
<script setup>
import { ref } from 'vue'
const etat = ref(true);
const myClass = ref('vert');
const afficher = () => {
  etat.value = !etat.value;
  if (etat.value) {
    myClass.value = 'vert';
  } else {
    myClass.value = 'rouge';
  }
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button @click="afficher">GO</button>
    <p :class="myClass">{{ etat ? 'on2' : 'OFF'}}</p>
  </div>
 
</template>

<style scoped>
.rouge {
  color:tomato;
}
.vert {
  color:green;
}
</style>

```
