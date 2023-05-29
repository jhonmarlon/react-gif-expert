import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputVal = inputValue.trim();
        if( inputVal.length <= 1 ) return;
        onNewCategory(inputVal);
        setInputValue('');
    }

    return (
        <form action="" onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
