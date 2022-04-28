function Withdraw() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const ctx = React.useContext(UserContext);
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
  
    return (
      <Card
        txtcolor="white"
        bgcolor="info"
        header="Withdraw"
        status={status}
        body={
          show ? (
            <WithdrawForm setShow={setShow} />
          ) : (
            <WithdrawMessage setShow={setShow} />
          )
        }
      />
    );
  
    function WithdrawForm(props) {
      const [withdraw, setWithdraw] = React.useState("");
      const [disabled, setDisabled] = React.useState(true);
  
      function handleWithdraw() {
        if (!validate(Number(withdraw), balance)) return;
  
        setBalance(balance - withdraw);
        ctx.users[0].balance = balance - Number(withdraw);
        ctx.users[0].movements.push({
          type: "withdraw",
          amount: withdraw,
        });
        setWithdraw("");
        setShow(false);
      }
  
      return (
        <>
          <span className="balance-information">Account Balance ${balance}</span>
          <br />
          <br />
          Withdraw Amount
          <input
            type="input"
            className="form-control"
            id="withdraw"
            placeholder="Withdraw Amount"
            value={withdraw}
            onChange={(e) => {
              setWithdraw(e.currentTarget.value);
              setDisabled(false);
            }}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleWithdraw}
            disabled={disabled}
          >
            Withdraw
          </button>
        </>
      );
    }
  
    function validate(withdraw, balance) {
      if (isNaN(withdraw)) {
        setStatus("Please enter a valid number");
        return false;
      }
      if (withdraw > balance) {
        setStatus("Transaction failed: Insuffienct funds");
        return false;
      }
      if (withdraw < 1) {
        setStatus("Withdrawl amount cannot be a negative number");
        return false;
      }
      newFunction();
      return true;
  
      function newFunction() {
        setStatus("Success!");
      }
    }
  }

  