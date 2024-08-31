import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/main/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PrivateRoute from './components/auth/PrivateRoute';
import NotFound from "./pages/errors/NotFound";
import Room1 from "./pages/duty/Room1";
import Room2 from "./pages/duty/Room2";
import Room3 from "./pages/duty/Room3";
import Room4 from "./pages/duty/Room4";
import Room5 from "./pages/duty/Room5";
import Navbar from "./components/main/Navbar";
import Tenant from "./pages/memo/Tenant";
import Duty from "./pages/memo/Duty";
import ShowerCabin from "./pages/washing/showerCabin";
import Things from "./pages/storage/Things";
import Shoes from "./pages/storage/Shoes";
import FirstAidKit from "./pages/health/firstAidKit";
import AllRoomsClimate from "./pages/climate/allRoomsClimate";
import KitchenClimate from "./pages/climate/KitchenClimate";
import Room5Climate from "./pages/climate/Room5Climate";
import AllRoomsVideo from "./pages/video/allRoomsVideo";
import KitchenVideo from "./pages/video/KitchenVideo";
import Room5Video from "./pages/video/Room5Video";
function App() {
  return (
      <>
        <BrowserRouter basename={"/Site/"}>
            <Navbar />
          <Routes>
              <Route path={"/"} exact element={<Home />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"/password-reset"} element={<PasswordReset />} />
              <Route path={"/duty/room_1"} element={<Room1 roomNumber={1} />} />
              <Route path={"/duty/room_2"} element={<Room2 roomNumber={2} />} />
              <Route path={"/duty/room_3"} element={<Room3 roomNumber={3} />} />
              <Route path={"/duty/room_4"} element={<Room4 roomNumber={4} />} />
              <Route path={"/duty/room_5"} element={<Room5 roomNumber={5} />} />
              <Route path={"/memo/tenant"} element={<Tenant />} />
              <Route path={"/memo/duty"} element={<Duty />} />
              <Route path={"/storage/things"} element={<Things />} />
              <Route path={"/storage/shoes"} element={<Shoes />} />
              <Route path={"/washing/shower_cabin"} element={<ShowerCabin />} />
              <Route path={"/health/first_aid_kit"} element={<FirstAidKit />} />
              <Route path={"/climate/all_rooms"} element={<AllRoomsClimate />} />
              <Route path={"/climate/kitchen"} element={<KitchenClimate />} />
              <Route path={"/climate/room_5"} element={<Room5Climate />} />
              <Route path={"/video/all_rooms"} element={<AllRoomsVideo />} />
              <Route path={"/video/kitchen"} element={<KitchenVideo />} />
              <Route path={"/video/room_5"} element={<Room5Video />} />
              <Route path={"/dashboard"} component={<PrivateRoute />} />
              <Route path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
