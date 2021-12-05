import React, { useState } from "react";

function Adduser() {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  console.log(input);
  const formdata = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Add User</h1>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={formdata}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            name="username"
            onChange={formdata}
          />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={(e) => {
              formdata(e);
            }}
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control"
            name="phone"
            onChange={(e) => {
              formdata(e);
            }}
          />
        </div>

        <div class="col-12"></div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adduser;
