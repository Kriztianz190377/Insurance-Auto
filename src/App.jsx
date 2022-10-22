import { QuoteProvider } from './context/QuoteProvider';
import AppInsurance from './components/AppInsurance';

function App() {
  return (
    <div>
      <QuoteProvider>      
        <AppInsurance />    
      </QuoteProvider>
    </div>
  );
}

export default App;
