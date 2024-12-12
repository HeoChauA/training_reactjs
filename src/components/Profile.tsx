interface ProfileProps {
  user: any
}

function Profile({user}: ProfileProps) {
  return (
    <div className="profile">
      <h2>Name: {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
}

export default Profile;