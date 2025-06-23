import React from "react";
// import '/App.css'

function Signup() {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <input type="text" name="firstname" placeholder="First Name" required />
        <input type="text" name="lastname" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="address-type">
          <label>
            <input type="radio" name="addressType" value="temporary" />
            Temporary Address
          </label>
          <label>
            <input type="radio" name="addressType" value="permanent" />
            Permanent Address
          </label>
        </div>
        <input type="text" name="pincode" placeholder="Pincode" required />
        <input type="text" name="street" placeholder="Street" required />
        <input type="text" name="houseNo" placeholder="House No." required />
        <input type="text" name="stc" placeholder="STC" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
