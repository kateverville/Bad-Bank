function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);

  return (
    <Card
      txtcolor="white"
      bgcolor="info"
      header="Deposit"
      status={status}
      body={

        show ? (
          <DepositForm setShow={setShow} />
        ) : (
          <DepositMessage setShow={setShow} />
        )

  }
    />
  );

  function DepositForm(props) {
    const [deposit, setDeposit] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleDeposit() {
      if (!validate(Number(deposit), balance)) return;

      setBalance(balance + Number(deposit));
      ctx.users[0].balance = balance + Number(deposit);
      ctx.users[0].movements.push({
        type: "deposit",
        amount: deposit,
      });
      setDeposit("");
      setShow(false);
    }

    return (
      <>
        <span className="balance-information">Account Balance ${balance} </span>
        <br />
        <br />
        Deposit Amount
        <input
          type="input"
          className="form-control"
          id="deposit"
          placeholder="Deposit Amount"
          value={deposit}
          onChange={(e) => {
            setDeposit(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleDeposit}
          disabled={disabled}
        >
        Deposit
        </button>
      </>
    );
  }

  function validate(deposit, balance) {
    if (isNaN(deposit)) {
      setStatus("Must enter a number");
      return false;
    }
    if (deposit < 1) {
      setStatus("Deposit cannot be a negative number");
      return false;
    }
    newFunction();
    return true;

    function newFunction() {
      setStatus("Success!");
    }
  }
}