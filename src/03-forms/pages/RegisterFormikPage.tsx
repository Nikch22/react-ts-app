import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LabeledTextField } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>

      <h1>Register Formik Page</h1>

      <Formik
        initialValues={ {
          name: '',
          email: '',
          password1: '',
          password2: ''
        } }
        onSubmit= { ( values ) => {
          console.log(values);
          
        } }
        validationSchema={ Yup.object({
          name: Yup.string()
                        .min(2,'El nombre debe tener mínimo 2 letras o más')
                        .max(16,'El nombre debe tener 16 letras o menos')
                        .required('El nombre es obligatorio'),
          email: Yup.string()
                    .email('El email no es válido')
                    .required('El email es obligatorio'),
          password1: Yup.string()
                    .min(6,'La contraseña debe tener 6 caracteres o más')
                    .required('La contraseña es obligatoria'),
          password2: Yup.string()
                    .oneOf( [Yup.ref('password1')], 'Las contraseñas no coinciden')
                    .required('La contraseña es obligatoria'),
        }) }
      >

        {
          ( { handleReset } ) => (
            <Form>

              <LabeledTextField type='text' name='name' label='Nombre' placeholder="Pepito Casas" />

              <LabeledTextField type='email' name='email' label='Email' placeholder="hey@mail.com" />

              <LabeledTextField type="password" name="password1" label='Contraseña' placeholder="******" />

              <LabeledTextField type='password' name="password2" label='Confirmar Contraseña' placeholder="Repita la Contraseña" />

              <button type='submit'>Registrar</button>
              <button type='button' onClick={ handleReset }>Reset</button>


            </Form>            
          )
        }

      </Formik>

    
    </div>
  )
}
