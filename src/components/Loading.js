const Loading = ({ center }) => {
  console.log(center);
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};
export default Loading;
