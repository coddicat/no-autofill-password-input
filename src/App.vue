<template>
  <div>
    <div>password: {{ password }}</div>
    <no-autofill-password-input v-model="password" :show-password="showPassword">
      <label>
        <input type="checkbox" v-model="showPassword" />
        <span>Show password</span>
      </label>
      <input type="text" v-model="password" style="margin-left:5px; font-size: 20px" />
    </no-autofill-password-input>
  </div>
</template>

<script>
import noAutofillPasswordInput from "./no-autofill-password-input";
export default {
  data: () => ({
    password: "",
    showPassword: false
  }),
  components: {
    noAutofillPasswordInput
  }
};
</script>