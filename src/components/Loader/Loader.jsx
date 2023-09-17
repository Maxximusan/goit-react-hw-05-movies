import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="500"
      width="500"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
