import "bootstrap/dist/css/bootstrap.min.css";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const storedDBUser = sessionStorage.getItem("DBuser");
  setUser(JSON.parse(storedDBUser));
  console.log("User Profile in My Profile page:", user);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title mb-4 text-center text-primary">
                Student Profile
              </h3>
              <div className="mb-3">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-3">
                <strong>Student ID:</strong> {user.studentId}
              </div>
              <div>
                <strong>Courses Purchased:</strong>
                <ul className="list-group mt-2">
                  <li className="list-group-item">{user.courses}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
