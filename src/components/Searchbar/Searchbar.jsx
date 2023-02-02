import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsQuestionLg } from 'react-icons/bs';
import {
  StyledSearchbar,
  StyledForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };

  heandlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  heandlerSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ search: '' });
  };

  render() {
    const { heandlerSubmit, heandlerChange } = this;
    const { search } = this.state;

    return (
      <StyledSearchbar>
        <StyledForm onSubmit={heandlerSubmit}>
          <SearchFormBtn type="submit">
            <BsQuestionLg
              style={{
                color: '#757575',
                display: 'inline-block',
                width: '100%',
              }}
            />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={heandlerChange}
          />
        </StyledForm>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
