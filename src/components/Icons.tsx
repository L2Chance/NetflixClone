import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

export const SearchIcon = (props: React.ComponentProps<"svg">) => (
  <FaSearch className="w-6 h-6 text-white" {...props} />
);

export const NotificationsIcon = (props: React.ComponentProps<"svg">) => (
  <IoNotifications className="w-6 h-6 text-white" {...props} />
);

export const ArrowLeftIcon = (props: React.ComponentProps<"svg">) => (
  <FaArrowLeft className="w-5 h-5 text-white" {...props} />
);

export const ArrowRightIcon = (props: React.ComponentProps<"svg">) => (
  <FaArrowRight className="w-5 h-5 text-white" {...props} />
);
