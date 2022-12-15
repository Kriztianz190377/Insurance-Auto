import { Fragment } from 'react';
import { BRAND, PLANS, YEARS } from '../constant/indexBrand';
import useQuote from '../hooks/useQuote';
import Error from './Error';

const FormInsurance = () => {
  const { handleCHangeData, data, error, setError, quoteInssuranse } =
    useQuote();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes('')) {
      setError('All fields are required');
      return;
    }

    setError('');
    quoteInssuranse();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {error && <Error />}
        <div className="my-5">
          <label
            htmlFor="brand"
            className="block mb-3 font-bold text-gray-600 uppercase"
          >
            Brand
          </label>
          <select
            className="w-full border-gray-200 rounded-lg 
            border-2 p-3 bg-white "
            name="brand"
            id="brand"
            value={data.brand}
            onChange={(e) => handleCHangeData(e)}
          >
            <option value="">---Select car brand--- </option>
            {BRAND.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-600 uppercase"
          >
            year
          </label>
          <select
            className="w-full border-gray-200 rounded-lg border-2 p-3
          bg-white "
            name="year"
            id="year"
            // value={data.year}
            onChange={(e) => handleCHangeData(e)}
          >
            <option value="">---Select car year--- </option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-600 uppercase"
          >
            PLan
          </label>

          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="plan" className="capitalize">
                  {plan.name}
                </label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  id="plan"
                  onChange={(e) => handleCHangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          className="w-full bg-indigo-500 hover:bg-indigo-600 
          transition-colors text-white py-3 font-bold text-xl 
          rounded-lg cursor-pointer"
          type="submit"
          value="Estimate"
        />
      </form>
    </>
  );
};

export default FormInsurance;
