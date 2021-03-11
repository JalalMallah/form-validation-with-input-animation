import AppProvider from 'context';
import Form from 'components/Form';
import SuccessBanner from 'components/SuccessBanner.js';

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
