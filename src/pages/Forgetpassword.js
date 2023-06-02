import React from "react";
import CustomInput from "../components/CustomInput";
//Forgetpassword
const Forgetpassword = () => {
  return (
    <div class="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <div class="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
        <h3 className="text-center"> Forgot Password </h3>
        <p className="text-center">Please give your register email </p>
        <form action="">
          <CustomInput type="text" label="Email adress" id="email" />
          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 p-4 "
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
