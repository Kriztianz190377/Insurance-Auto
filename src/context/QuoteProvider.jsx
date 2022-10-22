import { createContext, useState } from 'react';
import {
  brandCalcul,
  formatMoney,
  getYearDifferences,
  planCalcul,
} from '../helpers';

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState('');
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCHangeData = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const quoteInssuranse = () => {
    // Base
    let result = 2000;
    // Get year differences
    const differences = getYearDifferences(data.year);
    // Subtract 3% for each year
    result -= (differences * 3 * result) / 100;
    // European30%
    // American 15%
    // Asian 5%
    result *= brandCalcul(data.brand);
    // Basic 20%
    // Full 50%
    result *= planCalcul(data.plan);
    result = formatMoney(result);

    setLoading(true);
    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 3000);
  };

  return (
    <QuoteContext.Provider
      value={{
        handleCHangeData,
        data,
        error,
        setError,
        quoteInssuranse,
        result,
        loading,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };

export default QuoteContext;
