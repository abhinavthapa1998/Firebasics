import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import { getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { userAccessToken } from "./utils/fetchUserDetails";
import { useRouter } from "next/router";
import { colRef, db } from "./config/firebase.config";

const index = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  //CREATING THE DATA
  const createUser = () => {
    addDoc(colRef, { name: newName, age: Number(newAge) });
    getUsers();
  };
  //READING THE DATA
  const getUsers = async () => {
    const data = await getDocs(colRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //UPDATING THE DATA
  const updateUser = (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    updateDoc(userDoc, newFields);
    getUsers();
  };
  //DELETING THE DATA
  const deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    deleteDoc(userDoc);
    getUsers();
  };

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      router.push("/login");
    }
    getUsers();
  }, []);

  return (
    <div className="userList">
      <TextField
        variant="outlined"
        label="Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <TextField
        variant="outlined"
        type="number"
        label="Age"
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <Button variant="contained" onClick={createUser}>
        Create User
      </Button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <Button
              variant="contained"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default index;
