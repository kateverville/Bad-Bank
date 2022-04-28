const { Table } = require("react-bootstrap");

function AllData(){
  const ctx = React.useContext(UserContext);
  return ctx.users.map((user, index) =>{
    return(
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">email</th>
        <th scope="col">Password</th>
        <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.balance}</td>
    </tr>
  </tbody>
  </table>
    )}
    )
  }
