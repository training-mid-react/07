import { createHashRouter } from 'react-router-dom';
import { AppProvider } from '../core/state/AppContext';
import HomeContainer from '../container/HomeContainer';

export const router = createHashRouter([
  {
    path: '',
    element: <AppProvider><HomeContainer /></AppProvider>
  }
]);