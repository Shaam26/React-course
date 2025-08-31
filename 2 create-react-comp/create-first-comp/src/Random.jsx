function Random(){


   
  let num = Math.random() * 10 ;
  return <h1 style={{'background-color':'hsla(228, 92%, 29%, 0.40)'}}>
    Random Number is : {Math.round(num)}
  </h1>
}

export default Random;