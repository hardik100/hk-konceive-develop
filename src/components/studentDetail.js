import { useContext, useState } from "react";
import { MyContext } from "..";

const StudentDetail = (props) => {
  const myContext = useContext(MyContext);
  const [isEdit, setIsEdit] = useState(false);
  const [editableName, setEditableName] = useState("");
  const [value, setInputValue] = useState("");
  console.log(myContext);
  const handleEdit = (name) => {
    setInputValue(myContext.EditableItem[name]);
    setIsEdit(true);
    setEditableName(name);
  };

  const handleCancel = () => {
    setInputValue("");
    setIsEdit(false);
    setEditableName("");
  };
  return (
    <>
      <div>
        {isEdit && editableName === "RollNumber" ? (
          <>
            <input
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                myContext.updateFunc(
                  myContext.EditableItem?.RollNumber,
                  "RollNumber",
                  value
                );
                setIsEdit(false);
                setEditableName("");
              }}
            >
              update
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <p>{myContext.EditableItem?.RollNumber}</p>
            <button onClick={() => handleEdit("RollNumber")}>Edit</button>
          </>
        )}
      </div>
      <div>
        {isEdit && editableName === "Name" ? (
          <>
            <input
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                myContext.updateFunc(
                  myContext.EditableItem?.RollNumber,
                  "Name",
                  value
                );
                setIsEdit(false);
                setEditableName("");
              }}
            >
              update
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <p>{myContext.EditableItem?.Name}</p>
            <button onClick={() => handleEdit("Name")}>Edit</button>
          </>
        )}
      </div>
      <div>
        {isEdit && editableName === "Class" ? (
          <>
            <input
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                myContext.updateFunc(
                  myContext.EditableItem?.RollNumber,
                  "Class",
                  value
                );
                setIsEdit(false);
                setEditableName("");
              }}
            >
              update
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <p>{myContext.EditableItem?.Class}</p>
            <button onClick={() => handleEdit("Class")}>Edit</button>
          </>
        )}
      </div>
      <div>
        {isEdit && editableName === "Age" ? (
          <>
            <input
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                myContext.updateFunc(
                  myContext.EditableItem?.RollNumber,
                  "Age",
                  value
                );
                setIsEdit(false);
                setEditableName("");
              }}
            >
              update
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <p>{myContext.EditableItem?.Age}</p>
            <button onClick={() => handleEdit("Age")}>Edit</button>
          </>
        )}
      </div>
      <div>
        {isEdit && editableName === "Address" ? (
          <>
            <input
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => {
                myContext.updateFunc(
                  myContext.EditableItem?.RollNumber,
                  "Age",
                  value
                );
                setIsEdit(false);
                setEditableName("");
              }}
            >
              update
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <p>{myContext.EditableItem?.Address}</p>
            <button onClick={() => handleEdit("Address")}>Edit</button>
          </>
        )}
      </div>
    </>
  );
};

export default StudentDetail;
