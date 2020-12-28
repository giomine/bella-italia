import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input className="white-text" type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button className="form-button" type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;