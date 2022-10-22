import useQuote from '../hooks/useQuote';
import FormInsurance from './FormInsurance';
import Result from './Result';
import Spinner from './Spinner';

const AppInsurance = () => {
  const { result, loading } = useQuote();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-bold uppercase">
          auto insurance quote
        </h1>
      </header>

      <main
        className="bg-white m-auto shadow-xl p-10 rounded-xl 
                    md:w-2/3
                    lg:w-2/4"
      >
        <FormInsurance />

        {loading ? <Spinner/> : <Result/>}
      </main>
    </>
  );
};

export default AppInsurance;
