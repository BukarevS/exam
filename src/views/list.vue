<template>
  <div class="container">
    <h1>Список сотрудников</h1>
    <div class="row mt1" v-for="employee in employees" :key="employee.id">
      <div class="col-2" v-if="!employee.isUnderEditting">{{employee.name}}</div>
      <div class="col-2" v-if="employee.isUnderEditting"><input type="text" id="name" class="form-control" v-model="name"></div>
      <div class="col-2" v-if="!employee.isUnderEditting">{{employee.surname}}</div>
      <div class="col-2" v-if="employee.isUnderEditting"><input type="text" id="surname" class="form-control" v-model="surname"></div>
      <div class="col-2" v-if="!employee.isUnderEditting">{{employee.patronymic}}</div>
      <div class="col-2" v-if="employee.isUnderEditting"><input type="text" id="patronymic" class="form-control" v-model="patronymic"></div>
      <div class="col-2" v-if="!employee.isUnderEditting">{{employee.department}}</div>
      <div class="col-2" v-if="employee.isUnderEditting">
        <select v-model="department">
          <option>IT отдел</option>
          <option>Отдел продаж</option>
          <option>Отдел доставки</option>
          <option>Юридический отдел</option>
        </select>
      </div>
      <div class="col-2" v-if="!employee.isUnderEditting"><div class="btn btn-warning" @click="onEdit(employee.id)">Редактировать</div></div>
      <div class="col-2" v-if="employee.isUnderEditting"><div class="btn btn-warning" @click="onEditSave(employee.id)">Сохранить</div></div>
      <div class="col-2" v-if="!employee.isUnderEditting"><div class="btn btn-danger" @click="onDelete(employee.id)">Удалить</div></div>
      <div class="col-2" v-if="employee.isUnderEditting"><div class="btn btn-danger" @click="onEditCancel(employee.id)">Отменить</div></div>
    </div>
  </div>
</template>

<style>
  @media (max-width: 600px){
    .col-2{
      width: 10vw;
      font-size: 2vw;
    }
    .btn{
      width: 15vw;
      font-size: 1.5vw;
    }
    .form-control{
      width: 13vw;
      font-size: 2vw;
    }
    h1{
      font-size: 4vw;
    }
    select{
      width: 15vw;
    }
  }
  @media (max-width: 1000px) and (min-width: 600px){
    .col-2{
      width: 6vw;
      font-size: 2vw;
    }
    .btn{
      width: 10vw;
      font-size: 1vw;
    }
    .form-control{
      width: 11vw;
      font-size: 2vw;
    }
    h1{
      font-size: 4vw;
    }
    select{
      width: 10vw;
    }
  }
  @media (min-width: 1000px){
    select{
     width: 12vw;
    }
  }
</style>

<script>
  export default{
    data () {
      return {
        isUnderEditting: false,
        name: "",
        surname: "",
        patronymic: "",
        department: "",
        employees: []
      };
    },
    methods: {
      onLoad() {
        this.$http
        .get("http://localhost:3000/employees")
        .then(res => res.json())
        .then(res => this.employees = res)
      },
      onDelete(id) {
        for (let i = 0; i < this.employees.length; i ++){
          if (this.employees[i].id == id){
            this.employees.splice(i, 1);
            this.$http
            .delete("http://localhost:3000/employees/" + String(id))
            .then(res => console.log(res))
            .then(this.onLoad())
          }
        }
      },
      onEdit(id){
        for (let i = 0; i < this.employees.length; i ++){
          if (this.employees[i].id == id){
            this.employees[i].isUnderEditting = true;
            this.name = this.employees[i].name;
            this.surname = this.employees[i].surname;
            this.patronymic = this.employees[i].patronymic;
            this.department = this.employees[i].department;
          }
        }
      },
      onEditCancel(id){
        for (let i = 0; i < this.employees.length; i ++){
          if (this.employees[i].id == id){
            this.employees[i].isUnderEditting = false;
          }
        }
      },
      onEditSave(id){
        for (let i = 0; i < this.employees.length; i ++){
            if (this.employees[i].id == id){
              this.employees[i].name = this.name;
              this.employees[i].surname = this.surname;
              this.employees[i].patronymic = this.patronymic;
              this.employees[i].department = this.department;
              this.employees[i].isUnderEditting = false;
              this.$http
              .put("http://localhost:3000/employees/" + String(id), this.employees[i])
              .then(res => console.log(res))
              .then(() => this.onload)
        }
      }
    }
    },
    created: function() {
        this.$http
        .get("http://localhost:3000/employees")
        .then(res => res.json())
        .then(res => this.employees = res)    
        .then(console.log(this.employees))  
    }
  }
</script>