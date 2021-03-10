<template>
  <div>
    <a
      @click="callUsers"
      class="waves-effect waves-light btn"
    >Call Users</a>
    <a
      @click="countUsers"
      class="waves-effect waves-light btn"
    >
      <i class="material-icons left">cloud</i>Count Users
    </a>
    <a class="waves-effect waves-light btn">
      <i class="material-icons right">cloud</i>button
    </a>
    <a
      class="btn"
      @click="resourceGet"
    >resource.get</a>
    <hr />
    <pre>
    {{ users }}
    </pre>
  </div>
</template>
<script>
export default {
  data () {
    return {
      users: null,
      resourceUser: this.$resource('user{/id}')
    }
  },
  methods: {
    callUsers: function () {
      this.$http({ url: '../../users.json', method: 'GET' })
        .then(function (response) {
          this.users = response.data
        }, function (response) {
          M.toast('Erro!', 1000)
        });
    },
    countUsers: function () {
      M.toast({ html: this.users.length })
    },
    resourceGet: function () {
      this.resourceUser.get({ id: 1 }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>
