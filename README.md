# vue3-validate

一個基於 [vuelidate](https://github.com/vuelidate/vuelidate) 所延伸並適用於 vue3 的表單驗證套件

[![](https://img.shields.io/npm/v/@arshown/vue3-validate)](https://www.npmjs.com/package/@arshown/vue3-validate)

> !! 還不能用，有空再努力

## Install

```shell
> npm install @arshown/vue3-validate
# or
> yarn add @arshown/vue3-validate
```

## Usage

複寫原 [@vuelidate/core](https://www.npmjs.com/package/@vuelidate/core) 的 useValidate 使用方式，添加驗證訊息

```javascript
<script>
import { reactive } from "vue";
import { useValidate, validators } from "@arshown/vue3-validate";

const { required, minLength } = validators;

export default {
  setup() {
    const form = reactive({
      name: "",
    });
    const rules = {
      name: {
        required,
        minLength: minLength(4),
      },
    };
    const messages = {
      name: {
        required: "名稱為必填",
        minLength: () => ({ min }) => `長度至少為 ${min}`,
      },
    };

    const v$ = useValidate(rules, form, messages);

    return { form, v$ };
  }
}
</script>
```
>
> minLength 參數參考：
> https://github.com/vuelidate/vuelidate/blob/next/packages/validators/src/withMessages/minLength.js
>
