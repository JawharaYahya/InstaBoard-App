import UserList from "../UserList/UserList";

export default function Team({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : "light"}>
      <UserList/>
    </div>
  );
}