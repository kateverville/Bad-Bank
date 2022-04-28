function Home(){
  return (
    <Card
      txtcolor="info"
      header="Kate's BadBank"
      bgcolor="light"
      title="Welcome to the Kate's security-free banking experience"
      text="Is your money here? We don't really know."
      body={(<img src="badbank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
