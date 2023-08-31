import * as yup from 'yup';

export const dietPlanValidationSchema = yup.object().shape({
  age: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  height: yup.number().integer().required(),
  gender: yup.string().required(),
  goal: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
