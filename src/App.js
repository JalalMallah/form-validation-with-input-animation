import AppProvider from 'context';
import Form from 'components/Form/Form';
import SuccessBanner from 'components/SuccessBanner/SuccessBanner';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Form />
      <SuccessBanner />
    </AppProvider>
  );
}

export default App;
