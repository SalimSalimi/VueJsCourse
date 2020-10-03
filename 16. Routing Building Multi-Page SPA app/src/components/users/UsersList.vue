<template>
  <div>
    <button @click="renderTeams">Render Teams</button>
    <button @click="confirmChanges">Save changed</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    renderTeams() {
      this.$router.push("/teams");
    },
    confirmChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteLeave(_, _2, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userResponse = confirm("Unsaved changes, would like to save your changes ?");
      next(userResponse);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>