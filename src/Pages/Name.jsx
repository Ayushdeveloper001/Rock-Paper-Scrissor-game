import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "../Store/Slice/NameSlice";
import { toast } from "react-hot-toast";

const Name = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="Name">
      <div className="container">
        <h1>Enter Your Name</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.trim().length !== 0) {
              dispatch(updateName(name.trim()));
              toast(`Hey ${name}, Best Of Luck!!!`, {
                icon: "👏",
              });
              navigate("/game");
            } else {
              toast.error("Invalid Name!!!");
              return;
            }
          }}
        >
          <input
            type="text"
            placeholder="Put name like Ayush"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Name;
