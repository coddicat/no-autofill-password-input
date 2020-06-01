<template>
  <no-autofill-password-input v-model="password" :show-password="showPassword">
    <label>
      <input type="checkbox" v-model="showPassword" />
      <span>Show password</span>
    </label>
    <input type="text" v-model="password" style="margin-left:5px; font-size: 20px" />
  </no-autofill-password-input>
</template>

<script>
export default {
  data: () => ({
    password: "",
    showPassword: false
  }),
};
</script>
