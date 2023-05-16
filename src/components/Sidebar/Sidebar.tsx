import Auth from "./Auth";
import Search from "./Search";
import Contacts from "./Contacts";

export default function Sidebar() {
  return (
    <div style={{ borderRight: "1px solid #dad9d9", width: "399px", minHeight: "90vh", margin: 0 }}>
      <Auth />
      <Search />
      <Contacts />
    </div>
  );
}
