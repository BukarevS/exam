<template>
  <div class="body">
    <div class="container">
      <div class="header">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">
            <img src="./images/cat.gif" width="120" height="70" alt="" class="movement">
          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Добавить сотрудника</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list" class="nav-link">Просмотреть список сотрудников</router-link>
            </li>
          </ul>
        </nav>
        <router-view />
      </div>
      <div class="main">
        
      </div>
      <div class="footer">
        <div class="info">
          <p>Выполнил: Букарев Семён Викторович 181-361 22.06.2020</p>
        </div>
        <div class="liter">
          
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
  .body{
    background-color: #000006;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
  }
  .nav-link{
    color: #fff;
  }
  .movement:hover{
    transform: rotate(180deg);
  }
</style>
