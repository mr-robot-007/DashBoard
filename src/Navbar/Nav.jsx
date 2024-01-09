import Options from "./Options";
import UserInfo from "./UserInfo";

function Nav() {
  return (
    <div className=" overflow-y-scroll no-scrollbar">
      <UserInfo />
      <Options />
    </div>
  );
}

export default Nav;
