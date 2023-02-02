import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal, search }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            imageForList={webformatURL}
            imageForModal={largeImageURL}
            openModal={openModal}
            search={search}
          />
        );
      })}
    </ImageList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
