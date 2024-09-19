import { ChangeEvent, useState } from "react";

export const useForm = <T> ( initValues: T ) => {

  const [ formData, setFormData ] = useState( initValues )


  const onChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {

    setFormData( previous => ({
      ...previous,
      [ target.name ]: target.value
    }))

  }

  const resetForm = () => {
    setFormData( { ...initValues } );
  }

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }




  return {
    ...formData,
    formData,
    //Functions
    isValidEmail,
    onChange,
    resetForm
  }

}