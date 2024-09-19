import { FormikErrors, useFormik } from "formik"


interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ( { firstName, lastName, email }:FormValues ) => {

    const errors: FormikErrors<FormValues> = {};

    if ( !firstName.trim() ) {
      errors.firstName = 'El nombre es obligatorio';
    } else if ( firstName.length > 15 ) {
      errors.firstName = 'El nombre debe tener 15 letras o menos';
    }

    if ( !lastName.trim() ) {
      errors.lastName = 'El apellido es obligatorio';
    } else if ( lastName.length > 16 ) {
      errors.lastName = 'El apellido debe tener 16 letras o menos';
    }

    if (!email) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'El email no es válido';
    }
  


    return errors;

  }


  const { handleChange, values, handleSubmit, handleBlur, errors, touched,  } = useFormik( { 
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: ( values: FormValues ) => { 
      console.log(values)
    },
    validate 
  } );


  return (
    <div>
      <h1>FormikBasicPage</h1>
      <hr />

      <form noValidate onSubmit={ handleSubmit }>

        <label htmlFor="firstName">Nombre</label>
        <input 
          type="text" 
          name="firstName"
          onBlur={ handleBlur }
          value={ values.firstName }
          onChange={ handleChange }
        />
        { ( touched.firstName && errors.firstName ) && <span>{errors.firstName}</span> }

        <label htmlFor="lastName">Apellido</label>
        <input 
          type="text" 
          name="lastName"
          onBlur={ handleBlur }
          value={ values.lastName }
          onChange={ handleChange }
        />
        { ( touched.lastName && errors.lastName ) && <span>{errors.lastName}</span> }



        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          onBlur={ handleBlur }
          value={ values.email }
          onChange={ handleChange }
        />
        { ( touched.email && errors.email ) && <span>{errors.email}</span> }


        <button type='submit'>Enviar</button>


      </form>
    </div>

  )
}
