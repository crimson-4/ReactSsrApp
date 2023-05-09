import React from "react";
type props={
  name:string
}
function Home({name}:props) {
    return <h1>Hello  there  {name}!</h1>;
  };
  
  export default Home;