import Profile from "../components/Profile";

function ProfilePage() {
  const user = {
    name: "Ha Tran",
    email: "ha.tran@example.com",
    age: 30,
    address: "Nam Du, Linh Nam, Hoang Mai, Hn"
  };

  return (
    <>
    <h1>This is profile page</h1>
    <Profile user={user}/>
    </>
  );
}

export default ProfilePage;