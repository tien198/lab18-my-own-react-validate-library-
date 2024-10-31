import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import QuoteRoot from "./pages/QuoteRoot";
import Quotes, { loader as quotesLoader } from "./pages/Quotes";
import QuoteDetail, { loader as detailLoader } from "./pages/QuoteDetail";
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
        element: <QuoteRoot />,
        children: [
          {
            index: true,
            element: <Quotes />,
            loader: quotesLoader,
          },
          {
            path: ':quoteId',
            element: <QuoteDetail />,
            loader: detailLoader
          },
        ]
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
