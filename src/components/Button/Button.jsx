import PropTypes from 'prop-types';
import { StyleBtn } from './Button.styles';

const Button = ({ loadMoreImages }) => {
  return (
    <StyleBtn type="button" onClick={loadMoreImages}>
      Load more
    </StyleBtn>
  );
};

export default Button;

Button.propTypes = {
  loadMoreImages: PropTypes.func.isRequired,
};
