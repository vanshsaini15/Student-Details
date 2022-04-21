import { useState } from "react";

const StudentCard = ({ data, index, addTag, setAddTag, AddTag }) => {
  const [showGrades, setShowGrade] = useState(false);

  return (
    <div className="col-md-4 animated fadeIn" key={index}>
      <div className="card">
        <b className="btn" onClick={() => setShowGrade(!showGrades)}>
          {showGrades ? "-" : "+"}
        </b>
        <div className="avatar">
          <img src={data.pic} className="card-img-top" alt="" />
        </div>

        <h2 className="card-title">{data.firstName + " " + data.lastName}</h2>

        <p className="card-text">
          <span className="email">Email: {data.email}</span>
          <br></br>
          <span className="company">Company: {data.company}</span>
          <br></br>
          <span className="skill">Skill: {data.skill}</span>
          <br />

          <span className="grades">
            Average:{" "}
            {(
              data.grades.reduce((acc, grade) => acc + Number(grade), 0) /
              data.grades.length
            ).toFixed(2)}
            %
          </span>
          <br></br>
          <span className="tags-input-container">
          {data.tags.map((item, index) => (
            <button key={index}>{item}</button>
          ))}

          
          </span>
          
          {showGrades && (
            <p>
              {" "}
              {data.grades.map((item, i) => (
                <p key={i}>
                  {" "}
                  Test {i + 1}: {item}%
                </p>
              ))}
            </p>
          )}
        </p>
        <div className="tags-input-container">
          <input
            placeholder="Add a tag"
            type="text"
            value={addTag}
            onChange={(e) => setAddTag(e.target.value)}
          />
          <button onClick={() => AddTag(data.id)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
