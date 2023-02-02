import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent, ModalCloseBtn } from './Modal.styled';
import { BsXCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const {
      currentImage: { src },
      closeModal,
    } = this.props;

    const { closeOnBackdrop } = this;

    return createPortal(
      <Backdrop onClick={closeOnBackdrop}>
        <ModalContent>
          <img src={src} alt="Image for modal" width="400" />
          <ModalCloseBtn onClick={closeModal}>
            <BsXCircle
              style={{
                color: '#757575',
                display: 'inline-block',
                width: '100%',
              }}
            />
          </ModalCloseBtn>
        </ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  currentImage: PropTypes.shape({ src: PropTypes.string }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
