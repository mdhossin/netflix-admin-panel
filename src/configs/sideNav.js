import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
const sidebarNav = [
  {
    heading: "Dashboard",
    menu: [
      {
        link: "/",
        section: "Home",
        icon: (
          <LineStyleIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 1,
      },
      {
        link: "/anlyiss",
        section: "Analytics",
        icon: (
          <TimelineIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 2,
      },
      {
        link: "/sales",
        section: "Sales",
        icon: (
          <TrendingUpIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 3,
      },
    ],
  },
  {
    heading: "Quick Menu",
    menu: [
      {
        link: "/users",
        section: "Users",
        icon: (
          <PermIdentityIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 4,
      },
      {
        link: "/products",
        section: "Products",
        icon: (
          <StorefrontIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
      },
      {
        link: "/transactions",
        section: "Transactions",
        icon: (
          <AttachMoneyIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 5,
      },
    ],
  },
  {
    heading: "Notifications",
    menu: [
      {
        link: "/mail",
        section: "Mail",
        icon: (
          <MailOutlineIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 6,
      },
      {
        link: "/feedback",
        section: "Feedback",
        icon: (
          <DynamicFeedIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 7,
      },
      {
        link: "/messages",
        section: "Messages",
        icon: (
          <ChatBubbleOutlineIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 8,
      },
    ],
  },
  {
    heading: "Staff",
    menu: [
      {
        link: "/manage",
        section: "Manage",
        icon: (
          <WorkOutlineIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 9,
      },
      {
        link: "/anlyiss",
        section: "Analytics",
        icon: (
          <TimelineIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 10,
      },
      {
        link: "/reports",
        section: "Reports",
        icon: (
          <ReportIcon className="sidebar__wrapper__menu__list__item-icon" />
        ),
        id: 11,
      },
    ],
  },
];

export default sidebarNav;
