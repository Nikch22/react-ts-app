import { Formik, Form, Field, ErrorMessage,  } from "formik"
import * as Yup from 'yup';


export const FormikComponents = () => {


  return (
    <div>
      <h1>Formik Components</h1>
      <hr />

      <Formik
        initialValues={ {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          terms: false
        } }
        onSubmit={ ( values ) => { 
          console.log(values);
        } }
        validationSchema={ Yup.object({
          firstName: Yup.string()
                        .max(15,'El nombre debe tener 15 letras o menos')
                        .required('El nombre es obligatorio'),
          lastName: Yup.string()
                        .max(16,'El apellido debe tener 16 letras o menos')
                        .required('El apellido es obligatorio'),
          email: Yup.string()
                    .email('El email no es válido')
                    .required('El email es obligatorio'),
          jobTitle: Yup.string()
                    .notOneOf(['it-jr'], 'No se acepta esta opción')
                    .required('Debes Seleccionar una de las opciones'),
          terms: Yup.boolean()
                    .isTrue('Debes aceptar los Términos y Condiciones')
        }) 
        }
      >

        {
          ( formik ) => (
            <Form>

              <label htmlFor="firstName">Nombre</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="span" /> 
      
              <label htmlFor="lastName">Apellido</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="span" />      
      
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" /> 

              <label htmlFor="jobTitle">Cargo Laboral</label>
              <Field as="select" name="jobTitle" >
                <option value="">--- Elige Uno ---</option>
                <option value="developer">Desarrollador</option>
                <option value="designer">Diseñador</option>
                <option value="it-sr">TI Senior</option>
                <option value="it-jr">TI Junior</option>

              </Field>
              <ErrorMessage name="jobTitle" component="span" /> 

              <label>
                <Field type="checkbox" name="terms" />
                Términos y Condiciones
              </label>
              <ErrorMessage name="terms" component="span" /> 
      
              <button type='submit'>Enviar</button>    
              
            </Form>
          )
        }        

      </Formik>


    </div>

  )
}
