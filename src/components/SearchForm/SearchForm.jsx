import { useState } from 'react'
import PropTypes from 'prop-types';

export const SearchForm = (props) => {
    const { onSearch } = props
    
    const [value, setValue] = useState('');

    const submitForm = event => {
        event.preventDefault();
        if (value.trim() === '') {
            
            alert('Your query is empty');
            return;
        }
        onSearch(value);
        setValue('')
    };

    const onInputChange = event => {
         setValue(event.currentTarget.value.toLowerCase());
    }

    return (
        <>
            <form onSubmit={submitForm}>

            <button type="submit">Choose a film</button>
            <input
                type="text"
                autoComplete="off"
                 autoFocus
                placeholder="Search films"
                    onChange={onInputChange}
                    value={value}
        />
            </form>
        </>
    )
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};