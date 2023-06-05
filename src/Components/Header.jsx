import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { updateName } from "../Store/Slice/NameSlice";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Header = () => {
  const name = useSelector((state) => state.name.userName);
  const dispatch = useDispatch();
  const [logOutModal, setLogOutModal] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Rock-Paper-Scrissor</h1>
        </div>
        {name ? (
          <div className="profile">
            <div
              className="profile-container"
              onClick={() => {
                setLogOutModal(!logOutModal);
              }}
            >
              <FaUserAlt />
              <h1>{name}</h1>
            </div>
            <div className={logOutModal ? "logout active" : "logout"}>
              <button
                onClick={() => {
                  setLogOutModal(false);
                  dispatch(updateName(undefined));
                  toast("Thanks For Playing!!!", {
                    icon: "🎉",
                  });
                }}
              >
                LogOut
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
