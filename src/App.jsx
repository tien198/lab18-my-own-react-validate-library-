import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Notfound from "./pages/Notfound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Notfound />,
    children: [
      {
        path: 'quotes',
        element: <Quotes />
      },
      {
        path: ':quoteId',
        element: <QuoteDetail />
      },
      {
        path: 'new-quote',
        element: <NewQuote />
      }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
