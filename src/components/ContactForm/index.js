import {useState} from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const set = {
        name: value => setName( value ),
        email: value => setEmail( value ),
        message: value => setMessage( value )
    }
    const displayError = {
        name: 'Please enter your name',
        email: 'Invalid email',
        message: 'Please enter a message'
    }

    const check = {
        name: value => {
            return value.length ? true : false;
        },
        email: value => {
            return /^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( value );
        },
        message: value => {
            return value.length ? true : false;
        }
    }

    const handleFocusOut = ( event ) => {
        const { name: inputField, value } = event.target;
        if ( !check[ inputField ]( value ) ) setErrorMessage( displayError[ inputField ] );
    }

    const handleInputChange = ( event ) => {
        const { name: inputField, value } = event.target;
        setErrorMessage('');
        return set[ inputField ]( value );
    }

    const handleFormSubmit = ( event ) => {
        event.preventDefault();
        if ( !check.name( name ) ) {
            setErrorMessage( displayError[ 'name' ] );  
            return;
        } 
        if ( !check.email( email ) ) {
            setErrorMessage( displayError[ 'email' ] );
            return;
        }
        if ( !check.message( message ) ) {
            setErrorMessage( displayError[ 'message' ] );
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage( 'Message has been sent!' )
    }
    return (
        <form>
            <span className={styles.Message}>{errorMessage}</span>
            <label>
                Name:
                <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}
                    type='text'
                    placeholder='Name'
                />
            </label>
            <label>
                Email:
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}
                    type='text'
                    placeholder='Email'
                />
            </label>
            <label>
                Message:
                <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}
                    type='text'
                    placeholder='Message'
                    rows={8}
                />
            </label>
            <div>
                <button 
                    className='Button'
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    )
};

export default ContactForm;