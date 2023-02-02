import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, imageForList, imageForModal, openModal }) => {
  return (
    <GalleryItem onClick={() => openModal({ alt: id, src: imageForModal })}>
      <GalleryImg src={imageForList} alt="Image for list" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  imageForList: PropTypes.string,
  imageForModal: PropTypes.string,
  openModal: PropTypes.func,
};
