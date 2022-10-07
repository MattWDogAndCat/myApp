import { iMenu } from "@myProject/model";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonIcon from '@mui/icons-material/Person';
import UpcomingIcon from '@mui/icons-material/Upcoming';


export const MENULIST: iMenu[] = [
  { ItemIcon: HomeIcon, listItemText: "Home" },
  { ItemIcon: CalendarMonthIcon, listItemText: "Schedule" },
  { ItemIcon: TextSnippetIcon, listItemText: "All Transcription" },
  { ItemIcon: UpcomingIcon, listItemText: "Upcoming Call" },
  { ItemIcon: PersonIcon, listItemText: "My Profile" },
];
