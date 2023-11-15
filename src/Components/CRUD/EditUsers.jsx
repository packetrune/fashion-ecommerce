import { useContext, useEffect } from "react";
import { UsersContext } from "../../ContextApis/UsersContext";
import { useNavigate } from "react-router-dom";

export default function EditUsers() {
  const { UsersData, DeleteUser, CurrentUser } = useContext(UsersContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (CurrentUser?.role !== "admin") {
      navigate("/404");
    }
  }, [CurrentUser?.id, CurrentUser?.role, navigate]);

  const deleteUserHandler = (id) => {
    if (window.confirm(`Confirm removal of "${id}"`)) {
      DeleteUser(id);
    }
  }

  return (
    <table className="table table-dark table-responsive caption-top container-fluid container-lg" style={{ marginTop: '7%' }}>
      <caption className="text-center fw-bold">List of users</caption>
      <thead>
        <tr>
          <th scope="col" > UserName </th>
          <th scope="col" > Email </th>
          <th scope="col" > password </th>
          <th scope="col" > Phone Numer </th>
          <th scope="col" > Country </th>
        </tr>
      </thead>
      
      <tbody>
        {
          UsersData?.map((user) => {
            return (
              <tr key={user.id}>
                <td className="col-2">{user.userName}</td>
                <td className="col-3">{user.id}</td>
                <td className="col-2">{user.password}</td>
                <td className="col-2">{user.phone}</td>
                <td className="col-2">{user.country}</td>

                <td className="col-1">
                  <button className="btn btn-danger" onClick={() => deleteUserHandler(user.id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}