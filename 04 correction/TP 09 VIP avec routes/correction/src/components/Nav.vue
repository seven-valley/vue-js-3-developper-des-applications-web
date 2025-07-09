<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <a class="navbar-brand" href="#">
                <i class="fa-solid fa-martini-glass-citrus me-4"></i>
                VIP Cocktail</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" exact-active-class="active" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/builder" exact-active-class="active" class="nav-link">Builder</RouterLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>