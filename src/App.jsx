import React from 'react';
import Home from './user/Home';
import FoodMenu from './user/FoodMenu';
import Feedback from './user/Feedback';
import About from './user/About';
import TableBooking from './user/TableBooking';

// Admin Imports
import AdminDashboard from './AdminPages/Dashboard';
import AdminMenuManage from './AdminPages/Menumanage';
import AdminReservation from './AdminPages/Reservation';
import AdminFeedback from './AdminPages/Feedback';
import AdminReportGenrate from './AdminPages/Reportgenrate';
import AdminSetting from './AdminPages/Setting';
import AdminLogin from './AdminPages/Login';
import AdminAddNewDish from './AdminPages/Addnewdish';
import AdminAddNewCategory from './AdminPages/AddNewCategory';

function App() {
  const pathname = window.location.pathname;
  const path = pathname.split('/').pop();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    switch (path) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'menumanage':
        return <AdminMenuManage />;
      case 'reservation':
        return <AdminReservation />;
      case 'feedback':
        return <AdminFeedback />;
      case 'reportgenrate':
        return <AdminReportGenrate />;
      case 'setting':
        return <AdminSetting />;
      case 'login':
        return <AdminLogin />;
      case 'addnewdish':
        return <AdminAddNewDish />;
      case 'addNewCategory':
        return <AdminAddNewCategory />;
      default:
        return <AdminDashboard />;
    }
  }

  // User Routes
  switch (path) {
    case 'food_menu':
      return <FoodMenu />;
    case 'feedback':
      return <Feedback />;
    case 'about':
      return <About />;
    case 'table_booking':
      return <TableBooking />;
    case 'home':
    case 'index':
    case '':
    default:
      return <Home />;
  }
}

export default App;
