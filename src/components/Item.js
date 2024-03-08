import { Button } from "antd";
import { useState } from "react";

const ListItem = ({ user, onBlockUser, onDeleteUser }) => {
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  function onBlockHandler() {
    onBlockUser(user.chatId, !isBlocked);
    setIsBlocked(!isBlocked);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        {user.name},{user.city},{user.country},
      </div>
      <div style={{ gap: "10px", display: "flex" }}>
        <Button onClick={onBlockHandler}>
          {isBlocked ? "unblock" : "block"}
        </Button>
        <Button type="primary" danger onClick={() => onDeleteUser(user.chatId)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
