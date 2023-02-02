import { Component } from 'react';
import fetchApiImages from './services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { SectionApp, ErrorMessage } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    page: 1,
    error: null,
    currentImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.getImages();
    }
  }

  async getImages() {
    try {
      this.setState({ isLoading: true });
      const { search, page } = this.state;
      const data = await fetchApiImages(search, page);

      if (data.hits.length === 0) {
        return toast.error('Repeat the question again please');
      }

      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchImages = ({ search }) => {
    if (search.trim() === '') {
      return toast.error('Repeat the question again please');
    }

    this.setState({ search, images: [], page: 1 });
  };

  loadMoreImages = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { loadMoreImages, searchImages, openModal, closeModal } = this;
    const { images, isLoading, error, currentImage } = this.state;

    return (
      <SectionApp>
        <Searchbar onSubmit={searchImages} />
        <ToastContainer />
        {isLoading && <Loader />}
        {error && (
          <ErrorMessage>
            Something went wrong. Try reloading the page
          </ErrorMessage>
        )}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} openModal={openModal} />
            <Button text="Load more" loadMoreImages={loadMoreImages} />
          </>
        )}
        {currentImage && (
          <Modal currentImage={currentImage} closeModal={closeModal} />
        )}
      </SectionApp>
    );
  }
}

export default App;
