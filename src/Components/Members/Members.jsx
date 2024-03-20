import React from "react";
import "./Members.css";

const Members = () => {
  const persons = [
    {
      id: 1,
      name: "ვანო",
      imageUrl: "./Images/Ellipse 6.svg",
      image: "./Images/Person Icon.svg",
    },
    {
      id: 2,
      name: "საბა",
      imageUrl: "./Images/Ellipse 6.svg",
      image: "./Images/saba.svg",
    },
    {
      id: 3,
      name: "ნიკა",
      imageUrl: "./Images/Ellipse 6.svg",
      image: "./Images/nika.svg",
    },
  ];

  return (
    <div className="membersDiv">
      <h2 className="satauri">ჯგუფის წევრები</h2>
      <hr />
      <div className="personsDiv">
        {persons.map((person) => (
          <div key={person.id} className="firstPerson">
            <img className="eclipse" src={person.imageUrl} alt="Person" />
            <img className="person" src={person.image} alt="Person Icon" />
            <img className="camera" src="./Images/Camera.svg" alt="Camera" />
            <img
              className="cmraBg"
              src="./Images/Camera bg.svg"
              alt="Camera Background"
            />
            <h3 className="names">{person.name}</h3>
            <img
              className="wrapper"
              src="./Images/Btns wrapper.svg"
              alt="Button Wrapper"
            />
          </div>
        ))}
      </div>
      <img className="pagination" src="./Images/Pagination Btns.svg" />
      <h3 className="new">ახალი წევრი გვყავს?</h3>
    </div>
  );
};

export default Members;
