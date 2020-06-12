import usePrevious from './usePrevious';

const useCompare = (value) => {
  const previousValue = usePrevious(value);

  return previousValue !== value;
};

export default useCompare;
