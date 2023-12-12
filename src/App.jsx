import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetail, {
  loader as vanDetailLoader
} from "./pages/Vans/VanDetail.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetail, {
  loader as hostVanDetailLoader
} from "./pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login, {
  loader as loginLoader,
  action as loginAction
} from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Error from "./components/Error.jsx";
import { requireAuth } from "./utils.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />

      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route path="host" element={<HostLayout />} loader={hostVansLoader}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
