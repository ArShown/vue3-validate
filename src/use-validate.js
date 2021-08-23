
import useVuelidate from "@vuelidate/core";
import { mapObjIndexed, path } from "ramda";

const useVuelidateExtendsMessage = (rules, form, messages = {}) => {
  const newRules = mapObjIndexed(
    (validators, field) =>
      mapObjIndexed((validator, type) => {
        const message = path([field, type])(messages);
        if (message) validator = { ...validator, $message: message };
        return validator;
      }, validators),
    rules
  );

  return useVuelidate(newRules, form);
};

export default useVuelidateExtendsMessage;
