import { ErrorMessage, Field, useField } from 'formik'
import React from 'react'


interface Props {
  label:string,
  name:string,
  type?: 'email' | 'text' |'password',
  placeholder?: string,
  [x: string]: any
}

export const LabeledTextField = ( { label, ...props }: Props ) => {

  const [ field, meta ] = useField( props );

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <Field className="text-input" { ...field } {...props} />
      <ErrorMessage name={ props.name } component="span"/>
      {/* {
        (meta.touched && meta.error) && (
          <span className="error">{ meta.error }</span> 
        )
      } */}
    </>
  )
}
