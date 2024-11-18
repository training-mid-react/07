import { createHashRouter } from 'react-router-dom';
import { AppContextProvider } from '@core/state/AppContext';
import HomeContainer from '@containers/HomeContainer';

export const router = createHashRouter([
  {
    path: '',
    element: <AppContextProvider><HomeContainer /></AppContextProvider>
  }
]);