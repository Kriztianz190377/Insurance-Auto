import { useCallback, useMemo, useRef } from 'react';
import useQuote from '../hooks/useQuote';
import { BRAND, PLANS } from '../constant/indexBrand';

const Result = () => {
  const { result, data } = useQuote();
  const { brand, plan, year } = data;
  const yearRef = useRef(year);

  if (result === 0) return null;

  const [nameBrand] = useMemo(()=>
    BRAND.filter((b) => b.id === Number(brand)),
    [result]
  );
  const [namePlan] = useMemo(()=>
    PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow-lg">
      <h2 className="text-gray-700 font-black text-3xl">Summary</h2>
      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {nameBrand.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Year of the car: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl ">
        <span className="font-bold">Total price: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
