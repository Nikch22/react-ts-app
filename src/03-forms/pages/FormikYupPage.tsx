import { useFormik } from "formik"
import * as Yup from 'yup';


interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {


  const {  handleSubmit, errors, touched, getFieldProps } = useFormik( { 
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: ( values: FormValues ) => { 
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max(15,'El nombre debe tener 15 letras o menos')
                    .required('El nombre es obligatorio'),
      lastName: Yup.string()
                    .max(16,'El apellido debe tener 16 letras o menos')
                    .required('El apellido es obligatorio'),
      email: Yup.string()
                .email('El email no es válido')
                .required('El email es obligatorio'),
    })
  } );


  return (
    <div>
      <h1>Formik Yup</h1>
      <hr />

      <form noValidate onSubmit={ handleSubmit }>

        <label htmlFor="firstName">Nombre</label>
        <input type="text" { ...getFieldProps('firstName') }
        />
        { ( touched.firstName && errors.firstName ) && <span>{errors.firstName}</span> }

        <label htmlFor="lastName">Apellido</label>
        <input type="text" { ...getFieldProps('lastName') } />
        { ( touched.lastName && errors.lastName ) && <span>{errors.lastName}</span> }



        <label htmlFor="email">Email</label>
        <input type="email" { ...getFieldProps('email') }/>
        { ( touched.email && errors.email ) && <span>{errors.email}</span> }


        <button type='submit'>Enviar</button>


      </form>
    </div>

  )
}
