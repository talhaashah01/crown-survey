import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
;
import './assets/css/style.css';

import AppContext from "./infrastructure/contexts/appContext";
import PageLoaderContextProvider from "./infrastructure/contexts/pageLoaderContext";
import ToastContextProvider from "./infrastructure/contexts/toastContext";

import DashboardLayout from "./layouts/dashboard";
import AuthLayout from "./layouts/auth";

import Signin from "./views/signin";
import Signup from "./views/signup";
import ForgotPassword from "./views/forgotPassword";

import Dashboard from "./views/dashboard";
import Profile from "./views/profile";
import Product from "./views/product";
import Orders from "./views/orders";
import Bookings from "./views/bookings";
import Reports from "./views/reports";
import GenerateReport from "./views/reports/generateReport";
import BusinessUsers from "./views/business-users";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{}}>
          <PageLoaderContextProvider>
            <ToastContextProvider>
              <Routes>
                {/* Unprotected Routes */}
                {/* <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Signin />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                </Route> */}
                {/* Protected Routes */}
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="" element={<Dashboard />} />
                  <Route path="products" element={<Product />} />
                  {/* <Route path="report-management" element={<Reports />} /> */}
                  <Route path="report-management/*">
                    <Route index element={<Reports />} />/
                    <Route path=":id" element={<GenerateReport />} />
                  </Route>
                  {/* <Route path="business-users/*"> */}
                    {/* <Route index element={<BusinessUsers />} /> */}
                    {/* <Route path="create" element={<CreateRole />} /> */}
                    {/* <Route path=":id" element={<EditRole />} /> */}
                  {/* </Route> */}
                  {/* <Route path="roles/*">
                    <Route index element={<Roles />} />
                    <Route path="create" element={<CreateRole />} />
                    <Route path=":id" element={<EditRole />} />
                  </Route> */}
                
                  {/* <Route path="team/*">
                    <Route index element={<Team />} />
                    <Route path="add" element={<AddTeam />} />
                  </Route> */}
                  {/* <Route path="orders/*">
                    <Route index element={<Orders />} />
                  </Route> */}
                  {/* <Route path="profile" element={<Profile />} /> */}
                </Route>
              </Routes>
            </ToastContextProvider>
          </PageLoaderContextProvider>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
