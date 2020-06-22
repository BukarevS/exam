<template>
  <div class="container">
    <h1>Добавление сотрудника</h1>
    <select v-model="department">
      <option>IT отдел</option>
      <option>Отдел продаж</option>
      <option>Отдел доставки</option>
      <option>Юридический отдел</option>
    </select>
    <div class="fio">
      <div class="form-group w-100">
        <label for="name">Имя</label>
        <input type="text" id="name" class="form-control" v-model="name">
      </div>
      <div class="form-group w-100">
        <label for="surname">Фамилия</label>
        <input type="text" id="surname" class="form-control" v-model="surname">
      </div>
      <div class="form-group w-100">
        <label for="patronymic">Отчество</label>
        <input type="text" id="patronymic" class="form-control" v-model="patronymic">
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-light" @click="onSave">Добавить</button>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default{
    data () {
      return {
        name: "",
        surname: "",
        patronymic: "",
        department: ""
      };
    },
    methods: {
      onSave() {
        let eployee = {
          name: this.name,
          surname: this.surname,
          patronymic: this.patronymic,
          department: this.department,
          isUnderEditting: false
        };
        this.$http
          .post("http://localhost:3000/employees", eployee)
          .then(res => console.log(res))
      }
    }
  }
</script>