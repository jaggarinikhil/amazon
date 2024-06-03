import Login from "./Login";
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const Body=()=>{

  const appRouter= createBrowserRouter([

    {
      path:"/",
      element:<Login></Login>
    },
    {
      path:"/browser",
      element:<Browse></Browse>
    },
  ])



  return(
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export  default Body;