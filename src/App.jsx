import { createHashRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Pages/MainLayout/MainLayout.jsx'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Portfolio from './Pages/Portfolio/Portfolio.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
function App() {

let routers = createHashRouter([
    {path:'',element:<MainLayout/>,children:[
    {index:'true',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
   {path:'portfolio',element:<Portfolio/>},
   {path:'contact',element:<Contact/>},

   {path:'*',element:<NotFound/>},
    ],
  },
]);

  return (
    <>
<RouterProvider router={routers}></RouterProvider>
    </>
  )
}
export default App;