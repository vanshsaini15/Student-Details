import { useState } from "react";

const AppComp = ({ data, index }) => {
  const [showGrades, setShowGrade] = useState(false);

  const [tags, setTags] = useState([]);

  function handleEnterKey(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((_ele, i) => i !== index));
  }

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
            Average: {(data.grades.reduce((acc, grade) => (acc + Number(grade)), 0) / data.grades.length).toFixed(2)}%
		
          </span>
          <br></br>
          <br></br>

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
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          ))}
          <input
            onKeyDown={handleEnterKey}
            type="text"
            className="tags-input"
            placeholder="Add a tag"
          />
        </div>
      </div>
    </div>
  );
};

export default AppComp;
