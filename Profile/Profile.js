import React from "react";
import Button from "react-bootstrap/Button";
import  propTypes  from "prop-types";


const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <p> {props.bio} </p>
      <h1> {props.fullName}</h1>
      <h2> {props.profession}</h2>
      {props.children}
      <Button onClick={()=>{alert(`username:${props.fullName}`)}} variant="primary">Click Me</Button>

      <h1>  {props.description}</h1>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
    fullName : propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string
  
  }