import useQuote from '../hooks/useQuote';

const Error = () => {
  const { error } = useQuote();

  return (
    <div className='text-center border  border-red-400
     bg-red-100 rounded-md
    py-2 text-red-700'>
      <p >{error}</p>
    </div>
  );
};

export default Error;
