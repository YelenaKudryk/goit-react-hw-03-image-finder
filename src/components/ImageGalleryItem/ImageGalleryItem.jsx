import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  imageForList,
  imageForModal,
  openModal,
  search,
}) => {
  return (
    <GalleryItem onClick={() => openModal({ alt: id, src: imageForModal })}>
      <GalleryImg src={imageForList} alt={search} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  imageForList: PropTypes.string,
  imageForModal: PropTypes.string,
  openModal: PropTypes.func,
  search: PropTypes.string.isRequired,
};
