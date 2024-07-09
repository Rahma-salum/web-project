import Dashboard from "../Dashboard";

function UserForm() {
  return (
    <>
      <div class="container">
        <h2>User Form</h2>
        <form>
          <div className="row">
            <div className="col-8">
              <h4>User Name</h4>
              <input type="text" placeholder="User name" />
            </div>

            <div className="col-8">
              <h4>Address</h4>
              <input type="text" placeholder="Address" />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h4>Email </h4>
              <input type="Email" />
            </div>

            <div className="col-8">
              <h4>Phone Number</h4>
              <input type="Phone Number" />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h4>Description</h4>
              <input type="text" />
            </div>

            <div className="col-8">
                <h4>Upload Document </h4>
              <input type="file" />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <br />
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserForm;
