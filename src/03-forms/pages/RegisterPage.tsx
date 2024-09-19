import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

  const { 
    formData, name, email, password1, password2, isValidEmail,
    onChange, resetForm
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });


  const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    console.log( formData );
    
  }



  return (
    <div>

      <h1>RegisterPage</h1>

      <form noValidate onSubmit={ onSubmit }>

        <input 
        type="text" 
        name="name" 
        id="" 
        placeholder="Name"
        onChange={ onChange }
        className= { ` ${ name.trim().length <= 0 && 'has-error' } ` }
        value={ name } 
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input 
        type="email" 
        name="email" 
        id="" 
        placeholder="Email" 
        className={ ` ${ !isValidEmail(email) && 'has-error' } ` }
        onChange={ onChange }
        value={ email } 
        />
        { !isValidEmail( email ) && <span>Email Inválido</span> }

        <input 
        type="password" 
        name="password1" 
        id="" 
        placeholder="Password" 
        className= { ` ${ (password1.trim().length <= 0) || ( password2.trim().length > 0  && (password1.trim().length < 6 ) ) && 'has-error' } ` }
        onChange={ onChange }
        value={ password1 } 
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && <span>La contraseña debe tener al menos 6 letras</span> }

        <input 
        type="password" 
        name="password2" 
        id="" 
        placeholder="Repeat Password"
        className= { ` ${ (password2.trim().length <= 0) || ( password2.trim().length > 0  && (password2 != password1) ) && 'has-error' } ` }
        onChange={ onChange }
        value={ password2 } 
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { ( password2.trim().length > 0  && (password2 != password1) ) && <span>Las contraseñas no coinciden</span> }


        <button type='submit'>Registrar</button>
        <button type='button' onClick={ resetForm } >Reset</button>


      </form>
    </div>
  )
}
