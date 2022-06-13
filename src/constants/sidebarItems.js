import DashboardIcon from "../assets/icons/DashboardIcon";
import TripIcon from "../assets/icons/TripIcon";
import AccommodationIcon from "../assets/icons/accommodationIcon";
import UsersIcon from "../assets/icons/usersIcon";

const sidebarItems = [
  { value: 'dashboard', id: 'dashboard-sidebar',icon: DashboardIcon, isAdmin: false},
  { value: 'trips', id: 'trip-sidebar', icon: TripIcon,  },
  { value: 'accommodation', id: 'accommodation-sidebar', icon: AccommodationIcon, isAdmin: false },
  { value: 'top Destinations', id: 'top-destination-sidebar', icon: TripIcon, isAdmin: false },
  { value: 'users', id: 'users-sidebar', icon: UsersIcon, isAdmin: true },
];

export default sidebarItems;
