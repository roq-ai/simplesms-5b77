import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  phone_number: yup.string().required(),
  content: yup.string().required(),
  scheduled_date: yup.date().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
});
