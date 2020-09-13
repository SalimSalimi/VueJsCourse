<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model.number="userData.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.number="userData.password"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="yes">
            <input type="radio" id="yes" value="Yes" v-model="storeData" /> Yes
          </label>
          <label for="no">
            <input type="radio" id="no" value="No" v-model="storeData" /> No
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="submit">
            <button id="submit" @click.prevent="onSubmit">Submit</button>
          </label>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>FullName: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store data:{{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
  data() {
    return {
      userData: {
        fullName: "Salim Salimi",
        emai: "",
        password: "",
        storeData: "Yes"
      },
      isSubmitted: false
    };
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style></style>
