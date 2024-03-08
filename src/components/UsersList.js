import { useEffect, useState } from "react";
import ListItem from "./Item";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get("http://localhost:8000/users");

      setUsers(res.data.users);
    }

    getUsers();
  }, []);

  async function onDeleteUser(chatId) {
    await axios.post("http://localhost:8000/admin/deleteuser", {
      chatId,
    });

    setUsers(users.filter((user) => user.chatId !== chatId));
  }

  async function onBlockUser(chatId, isBlocked) {
    await axios.post("http://localhost:8000/admin/blockuser", {
      chatId,
      isBlocked,
    });
  }

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      {users.map((user) => (
        <ListItem
          key={user.chatId}
          user={user}
          onDeleteUser={onDeleteUser}
          onBlockUser={onBlockUser}
        />
      ))}
    </div>
  );
};

export default UserList;
