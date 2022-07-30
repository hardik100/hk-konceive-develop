import { React, useContext } from "react";
import { withRouter } from "react-router-dom";
import { MyContext } from "..";

const StudentsListing = (props) => {
  const myContext = useContext(MyContext);
  console.log(myContext);
  return (
    <div>
      {myContext.studentsList.map((i) => {
        return (
          <div
            onClick={() => {
              props.history.push(`/studentDetail/${i.RollNumber}`);
              myContext.setEdit(i);
            }}
          >
            <p>Roll Number: {i.RollNumber}</p>
            <p>Name: {i.Name}</p>
            <p>Class: {i.Class}</p>
            <p>Age: {i.Age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(StudentsListing);
