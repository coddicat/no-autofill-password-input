# no-autofill-password-input

## Installation
```
npm install no-autofill-password-input

```

## Vue install
```
import 'no-autofill-password-input/dist/noAutofillPasswordInput.css';
Vue.component('no-autofill-password-input', noAutofillPasswordInput);

```

## Usage
```
<no-autofill-password-input v-model="password" :show-password="showPassword">
</no-autofill-password-input>

```

## Slot
```
<no-autofill-password-input :value="password" :show-password="showPassword">
  <label>
    <input type="checkbox" v-model="showPassword" />
    <span>Show password</span>
  </label>
  <input type="text" v-model="password" style="margin-left:5px; font-size: 20px" />
</no-autofill-password-input>

```

## props
- inputClass
- maskClass
- showPassword


## Important
If input style changed after mounting needed rerender the component