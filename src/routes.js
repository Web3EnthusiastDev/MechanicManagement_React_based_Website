import Dashboard from './pages/Dashboard';

import Mechanics from './pages/Mechanics';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import RecentActivities from './pages/RecentActivities';

import TeamPerformance from './pages/TeamPerformance';
import Alerts from './pages/Alerts';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import Feedback from './components/Feedback';
import Tasks from './pages/Tasks';
import BookAppointment from './pages/BookAppointment';

const routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/', element: <Home /> },

  { path: '/mechanics', element: <Mechanics /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/recent-activities', element: <RecentActivities /> },

  { path: '/team-performance', element: <TeamPerformance /> },
  { path: '/alerts', element: <Alerts /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/feedback', element: <Feedback /> },
  { path: '/tasks', element: <Tasks /> },
  { path: '/book-appointment', element: <BookAppointment /> },
];

export default routes;
