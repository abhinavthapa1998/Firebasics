import React, { useEffect, useState } from "react";
import NavbarLogIn from "../components/NavbarLogIn";
import Background from "../components/Background";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { userAccessToken } from "../pages/utils/fetchUserDetails";
import { useRouter } from "next/router";
import { colRef, db } from "../pages/config/firebase.config";
import { Card } from "@mui/material";

const UserCard = () => {
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
  //READING DATA ON LOAD
  useEffect(() => {
    const accessToken = userAccessToken();
    //CHECKING FOR AUTHENTICATION
    if (!accessToken) {
      router.push("/login");
    }
    getUsers();
  }, []);

  return (
    // INPUT FIELDS
    <>
      <NavbarLogIn />

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
        {/* DISPLAYING THE CURRENT DATA */}
        <Button variant="contained" onClick={createUser}>
          Create User
        </Button>

        {users.map((user) => {
          return (
            <Card variant="outlined">
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              {/* INCREASE AGE BUTTON */}
              <Button
                variant="contained"
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                Increase Age
              </Button>
              {/* DELETE BUTTON */}
              <Button
                variant="contained"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </Button>
            </Card>
          );
        })}
      </div>
      <Background />
    </>
  );
};

export default UserCard;
