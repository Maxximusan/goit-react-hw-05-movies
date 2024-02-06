import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as SC from 'components/SearchForm/SerchForm.styled';

export const SearchForm = props => {
  const { onSearch, setIsFormSubmit, setIsLoader } = props;

  const [value, setValue] = useState('');

  const submitForm = event => {
    event.preventDefault();
    
    if (value.trim() === '') {
      toast.warning('Your search-query is empty');
      return;
    }
    onSearch(value);
    setValue('');
    setIsFormSubmit(true);
    setIsLoader(true);
  };

  const onInputChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
    setIsFormSubmit(false);
  };

  return (
    <>
      <SC.Forma onSubmit={submitForm}>
        <SC.Button type="submit">Chose? Push here!</SC.Button>
        <SC.SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={onInputChange}
          value={value}
        />
      </SC.Forma>
    </>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
