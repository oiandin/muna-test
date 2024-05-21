<script>
  import Nav from './components/Navbar.vue';
  import Login from './components/Login.vue';

      export default {
        name: 'App',
        components: {
          Nav,
          Login
        }
      };
</script>

<template>
  <div id="app">
    <Nav />
  </div>
  <div>
    <Login />
  </div>
</template>
