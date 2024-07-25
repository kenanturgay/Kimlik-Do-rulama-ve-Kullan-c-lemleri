import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Header() {
  const { isUserLoggedIn, logOut } = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!isUserLoggedIn && (
            <button
              onClick={() => {
                history.push("./login");
              }}
            >
              Login
            </button>
          )}
          {isUserLoggedIn && (
            <>
              <button onClick={()=>{history.push('/friends')}}>FRIENDS LIST</button>
              <button onClick={()=>{history.push('/friends/add')}}>ADD FRIEND</button>
              <button onClick={logOut}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
