
function Balance() {
    const ctx = React.useContext(UserContext);
  
    return (
      <Card
        txtcolor="black"
        bgcolor="info"
        header="Balance"
        key={ctx.users[0].name}
        body={
          <>
            <ul className="list-group list-group-flush make-center bg-dark">
              <li className="list-group-item make-center">
                Account balance: ${ctx.users[0].balance}
              </li>
            </ul>
          </>
        }
      />
    );
  }