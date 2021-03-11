import AppProvider from 'context';
import Form from 'components/Form';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Form />
    </AppProvider>
  );
}

export default App;
