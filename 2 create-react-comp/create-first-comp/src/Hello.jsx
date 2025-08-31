function Hello(){
   
  let myName = 'Shameem';
  let num = 456;
  let fullName = () => {
    return 'Shameem Banu';
  }
   

  return <p>
    Message no:{num}.I am your future master {fullName()}
  </p>
}

export default Hello;