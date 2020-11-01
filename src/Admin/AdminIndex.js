import React, { useContext } from "react";
import AdminUser from "./models/AdminUser";

const AdminIndex = () => {
  // eslint-disable-next-line no-unused-vars
  const [_state, _signin, signout] = useContext(AdminUser);

  return (
    <div>
      <div>Here is the admin page</div>
      <button type="button" onClick={signout}>
        Signout
      </button>
    </div>
  );
};

export default AdminIndex;
