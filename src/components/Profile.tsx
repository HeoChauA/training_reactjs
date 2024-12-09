// src/components/Profile.tsx
import React from "react";

// Định nghĩa kiểu dữ liệu cho props
interface ProfileProps {
  name: string;
  age: number;
  location: string;
}

// Component Profile nhận vào props và hiển thị thông tin người dùng
const Profile: React.FC<ProfileProps> = ({ name, age, location }) => {
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p><strong>Tên:</strong> {name}</p>
      <p><strong>Tuổi:</strong> {age}</p>
      <p><strong>Địa chỉ:</strong> {location}</p>
    </div>
  );
};

export default Profile;