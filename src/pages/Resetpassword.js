import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div class="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <div class="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
        <h3 className="text-center">Reset your password </h3>
        <p className="text-center">Please enter your new password </p>
        <form action="">
          <CustomInput type="password" label="New Password" id="pass" />
          <CustomInput
            type="password "
            label="confirm Password"
            id="confirmpass"
          />

          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 p-4 "
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
