function Login(){
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('')
  const [loggedOut, setLoggedOut] = React.useState('');
  const ctx = React.useContext(UserContext);

  function findUser(){
      let data = ctx.users;
         data.forEach(user => {
          if(loginEmail === user.email && loginPassword === user.password) {
                  console.log('user match');
                  ctx.activeUser = user;
                  console.log(ctx);
                  setLoggedOut(false);;       
              }
      }); 
  }

  const logoutUser = () => {
      delete ctx.activeUser;
      setLoginEmail('');
      setLoginPassword('');
      setLoggedOut(true);
      console.log(ctx);
  };

  return(
      <div className="container">
          <Card 
              txtcolor="info"
              bgcolor="light"
              header="Login"
              body={!ctx.activeUser ? (
                  <>
                  Email address<br/> 
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
                  Password<br/> 
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-info" onClick={findUser}>Login</button>
                  </>
              ) : (
                  <>
                  Welcome {ctx.activeUser.name}!<br/><br/>
                  <button type="submit" className="btn btn-info" onClick={logoutUser}>Logout</button>
                  </>
              )
              } 
          />
      </div>
  );
}
