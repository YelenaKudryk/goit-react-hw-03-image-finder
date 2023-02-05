import { ThreeCircles } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderSpinner>
      <ThreeCircles
        height="100"
        width="100"
        color="#757575"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderSpinner>
  );
};

export default Loader;
