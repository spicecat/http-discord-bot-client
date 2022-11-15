import { useFormik } from 'formik';
import { Form } from 'components';

const initialValue = (type) => {
    switch (type) {
        case 'number':
            return 0;
        case 'boolean':
            return false;
        default:
            return '';
    }
}

export default function FormController({ handleSubmit, submit, validationSchema }) {
    const formik = useFormik({
        initialValues: Object.entries(validationSchema.fields).reduce((acc, [id, { type }]) => ({ ...acc, [id]: initialValue(type) }), {}),
        validateOnChange: false,
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    const fields = Object.entries(validationSchema.fields).map(([id, v]) => ({
        error: Boolean(formik.touched[id] && formik.errors[id]),
        helperText: formik.touched[id] && formik.errors[id],
        onChange: formik.handleChange,
        value: formik.values[id],
    }))
    console.log(123123, fields, formik)

    return Form({ fields, handleSubmit });
}