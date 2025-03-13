import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/main/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import NotFound from "./pages/errors/NotFound";
import Room1 from "./pages/duty/Room1";
import Room2 from "./pages/duty/Room2";
import Room3 from "./pages/duty/Room3";
import Room4 from "./pages/duty/Room4";
import Room5 from "./pages/duty/Room5";
import Navbar from "./components/main/Navbar";
import Tenant from "./pages/memo/Tenant";
import Duty from "./pages/memo/Duty";
import SmartRules from "./pages/for_very_smart/smartRules";
import Things from "./pages/storage/Things";
import Shoes from "./pages/storage/Shoes";
import FirstAidKit from "./pages/health/firstAidKit";
import AllRoomsClimate from "./pages/climate/allRoomsClimate";
import KitchenClimate from "./pages/climate/KitchenClimate";
import Room5Climate from "./pages/climate/Room5Climate";
import Room1Climate from "./pages/climate/Room1Climate";
import Room2Climate from "./pages/climate/Room2Climate";
import Room3Climate from "./pages/climate/Room3Climate";
import Room4Climate from "./pages/climate/Room4Climate";
import Room6Climate from "./pages/climate/Room6Climate";
import CorridorClimate from "./pages/climate/CorridorClimate";
import WashRoomClimate from "./pages/climate/WashRoomClimate";
import AllRoomsVideo from "./pages/video/allRoomsVideo";
import KitchenVideo from "./pages/video/KitchenVideo";
import Room5Video from "./pages/video/Room5Video";
import ElectricalPanel from "./pages/power_supply/ElectricalPanel";
import Reasons from "./pages/fines/Reasons";
import Why from "./pages/fines/Why";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import {AuthProvider} from "./contexts/AuthContext";
import Logout from "./pages/auth/Logout";


function App() {

  return (
      <>
          <AuthProvider>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path={"/"} exact element={<Home/>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/password-reset"} element={<PasswordReset/>}/>
                  <Route path={"/duty/room_1"} element={<Room1 roomNumber={1}/>}/>
                  <Route path={"/duty/room_2"} element={<Room2 roomNumber={2}/>}/>
                  <Route path={"/duty/room_3"} element={<Room3 roomNumber={3}/>}/>
                  <Route path={"/duty/room_4"} element={<Room4 roomNumber={4}/>}/>
                  <Route path={"/duty/room_5"} element={<Room5 roomNumber={5}/>}/>
                  <Route path={"/memo/tenant"} element={<Tenant/>}/>
                  <Route path={"/memo/duty"} element={<Duty/>}/>
                  <Route path={"/storage/things"} element={<Things/>}/>
                  <Route path={"/storage/shoes"} element={<Shoes/>}/>
                  <Route path={"/for_very_smart/smart_rules"} element={<SmartRules/>}/>
                  <Route path={"/power_supply/electrical_panel"} element={<ElectricalPanel/>}/>
                  <Route path={"/health/first_aid_kit"} element={<FirstAidKit/>}/>
                  <Route path={"/climate/all_rooms"} element={<AllRoomsClimate/>}/>
                  <Route path={"/climate/kitchen"} element={<KitchenClimate/>}/>
                  <Route path={"/climate/room_1"} element={<Room1Climate/>}/>
                  <Route path={"/climate/room_2"} element={<Room2Climate/>}/>
                  <Route path={"/climate/room_3"} element={<Room3Climate/>}/>
                  <Route path={"/climate/room_4"} element={<Room4Climate/>}/>
                  <Route path={"/climate/room_5"} element={<Room5Climate/>}/>
                  <Route path={"/climate/room_6"} element={<Room6Climate/>}/>
                  <Route path={"/climate/corridor"} element={<CorridorClimate/>}/>
                  <Route path={"/climate/wash_room"} element={<WashRoomClimate/>}/>

                  <Route path={"/fines/reasons"} element={<Reasons/>}/>
                  <Route path={"/fines/why"} element={<Why/>}/>


                  <Route path={"/video/all_rooms"} element={<ProtectedRoute component={AllRoomsVideo}/>} />
                  <Route path={"/video/kitchen"} element={<ProtectedRoute component={KitchenVideo}/>} />
                  <Route path={"/video/room_5"} element={<ProtectedRoute component={Room5Video}/>} />
                  <Route path={"/users/add"} element={<ProtectedRoute component={Register}/>} />
                  <Route path={"/logout"} element={<ProtectedRoute component={Logout}/>} />

                  <Route path={"*"} element={<NotFound/>}/>
              </Routes>
          </BrowserRouter>
          </AuthProvider>
      </>
  );
}

export default App;
