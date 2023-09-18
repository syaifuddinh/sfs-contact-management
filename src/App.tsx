import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "pages/home"
import LoginPage from "pages/login"
import RegistrationPage from "pages/registration"
import CreatingContactPage from "pages/contact/create";
import UpdatingContactPage from "pages/contact/edit";
import ShowingContactPage from "pages/contact/show";
import AuthProtected from "layouts/auth.protected";
import AuthForbidden from "layouts/auth.forbidden";
import "assets/css/index.scss";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthForbidden children={<LoginPage />} />,
  },
  {
    path: "/registration",
    element: <AuthForbidden children={<RegistrationPage />} />,
  },
  {
    path: "/",
    element:<AuthProtected children={ <HomePage />} />,
  },
  {
    path: "/contact/create",
    element:<AuthProtected children={<CreatingContactPage />} />,
  },
  {
    path: "/contact/:id",
    element:<AuthProtected children={<ShowingContactPage />} />
  },
  {
    path: "/contact/:id/edit",
    element:<AuthProtected children={<UpdatingContactPage />} />
  }
]);

const App = () => {
    return (
            <>
                <RouterProvider router={router} />
            </>
    )
}

export default App;