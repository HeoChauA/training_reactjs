type userType = {
  name: string;
  email: string;
  age: number;
  adress: string;
};

const Profile = (user: userType) => {
  return (
    <div className="container">
      <h1>My Information:</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Adress:</strong> {user.adress}</p>
    </div>
  )
}

export default Profile;