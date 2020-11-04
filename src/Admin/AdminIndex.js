import React from "react";
import useAdminUser from "./models/AdminUser";

const AdminIndex = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, { signout }] = useAdminUser();

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
