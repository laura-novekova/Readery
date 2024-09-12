import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home, { bookLoader } from './pages/Home';
import About from './pages/About';
import SingleBookPage, { singleBookLoader } from './pages/SingleBookPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Contact from './pages/Contact';
import { AppProvider } from './components/Context';
import Favorites from './pages/Favorites';
import WantToRead from './pages/WantToRead';
import AlreadyRead from './pages/AlreadyRead';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: bookLoader(queryClient),
  },
  {
    path: '/:bookId',
    element: <SingleBookPage />,
    loader: singleBookLoader(queryClient),
  },
  {
    path: 'About',
    element: <About />,
  },
  {
    path: 'Contact',
    element: <Contact />,
  },
  {
    path: 'Favorites',
    element: <Favorites />,
  },
  {
    path: 'WantToRead',
    element: <WantToRead />,
  },
  {
    path: 'AlreadyRead',
    element: <AlreadyRead />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </AppProvider>
);
