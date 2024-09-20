import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { LabeledTextField, SelectField } from '../components';
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const validatedFields: { [key: string]: any } = {};

for (const field of formJson) {
  initialValues[field.name] = field.value;

  if (!field.validations) continue;

  let schema = Yup.string();

  // Ajustar el esquema dependiendo del tipo de campo
  if (field.type === 'select') {
    schema = Yup.string().oneOf(field.options!?.map((option: any) => option.value));
  }

  for (const rule of field.validations) {
    
    if (rule.type === 'required') {
      schema = schema.required(rule.msg || 'Este campo es requerido');
    }

    if (rule.type === 'minLength' && 'value' in rule) {
      schema = schema.min(
        rule.value || 2,
        rule.msg || `Mínimo de ${rule.value || 2} caracteres`
      );
    }

    if (rule.type === 'maxLength' && 'value' in rule) {
      schema = schema.max(
        rule.value || 16,
        rule.msg || `Máximo de ${rule.value || 16} caracteres`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.msg || 'El email no es válido');
    }

    if (rule.type === 'oneOf' && 'ref' in rule) {
      schema = schema.oneOf(
        [Yup.ref(rule.ref || '')],
        rule.msg || 'Las contraseñas no coinciden'
      );
    }
  }

  validatedFields[field.name] = schema;
}

// Validar el esquema completo
const validationSchema = Yup.object({ ...validatedFields });

export const DynamicFormikPage = () => {

  

  return (
    <div>
      
      <h1>Dynamic Formik Page</h1>


      <Formik
        initialValues={ initialValues }
        onSubmit= { ( values ) => {
          console.log(values);
          
        } }
        validationSchema={ validationSchema }
      >

        {
          ( { handleReset } ) => (
            <Form>

              {
                formJson.map( ( { type, name, label, placeholder, options }, i ) => {

                  if ( type === "input" || type === "email" || type === "password" ) {
                    return <LabeledTextField 
                      key={ name+i }
                      type={ type as any } 
                      name={ name } 
                      label={ label } 
                      placeholder={ placeholder } 
                    />
                  } else if (type === "select") {
                    return <SelectField 
                      key={ name+i } 
                      name={ name }  
                      label={ label } 
                      >
                        <option value="">--- Elige Tu Juego Preferido ---</option>
                        {
                          options?.map( ( option ) => (
                            <option key={ option.id } value={ option.value }>{ option.label }</option>
                          ))
                        }
                      </SelectField>
                  }

                  throw new Error(`El type: ${type} no es Soportado.`);

                })
              }


              <button type='submit'>Registrar</button>
              <button type='button' onClick={ handleReset }>Reset</button>

            </Form>            
          )
        }

      </Formik>
    </div>
  )
}
