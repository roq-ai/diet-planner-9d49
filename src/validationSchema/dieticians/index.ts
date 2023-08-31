import * as yup from 'yup';

export const dieticianValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  experience_years: yup.number().integer().required(),
  certification: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
