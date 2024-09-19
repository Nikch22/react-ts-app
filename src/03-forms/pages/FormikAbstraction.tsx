import { Formik, Form  } from "formik"
import * as Yup from 'yup';
import { LabeledTextField, SelectField,CheckboxField } from "../components";


export const FormikAbstraction = () => {


  return (
    <div>
      <h1>Formik Abstraction</h1>
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

              <LabeledTextField name="firstName" label="Nombre" />
      
              <LabeledTextField name="lastName" label="Apellido" />
    
              <LabeledTextField type="email" name="email" label="Email" />

              <SelectField name="jobTitle" label="Cargo Laboral" >
                <option value="">--- Elige Uno ---</option>
                <option value="developer">Desarrollador</option>
                <option value="designer">Diseñador</option>
                <option value="it-sr">TI Senior</option>
                <option value="it-jr">TI Junior</option>
              </SelectField>

              <CheckboxField name="terms" label="Términos y Condiciones" />
      
              <button type='submit'>Enviar</button>    
              
            </Form>
          )
        }        

      </Formik>


    </div>

  )
}
