<template>
    <div class="strawberry">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        name: 'Strawberry',
        message: 'I like Strawberry'
      }
    }
  };
</script>
  
<style>
    .strawberry {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: rgb(245, 92, 138);
    }
</style>