import * as Yup from 'yup';

export const taskSchema = Yup.object({
  body: Yup.string()
    .trim()
    .matches(/.{2,64}/, 'length 2..64')
    .required('required'),
  deadLine: Yup.date()
    .min(new Date(), 'wrong data')
    .required('required'),
});
