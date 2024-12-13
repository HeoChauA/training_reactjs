interface User {
    name: string;
    email: string;
    age: number;
    address: string;
  }

function Profile({user}: { user: User }) {
    return (
        <div className="profile-form center">
            <h1>Profile</h1>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Age:</b> {user.age}</p>
            <p><b>Address:</b> {user.address}</p>
        </div>
    );
}

function ProfilePage() {
    const user = {
        name: 'Dang Thien',
        email: 'thien@example.com',
        age: 23,
        address: 'Yen So, Hoang Mai, Ha Noi'
    };

    return (
        <Profile user={user} />
    );
}

export default ProfilePage;