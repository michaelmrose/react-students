import StudentRow from "./StudentRow";
export default function StudentsTable(props) {
  const students = props.students;
  return (
    <>
      <h1>Students</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Bio</th>
          <th>Scores</th>
          <th>Average</th>
        </thead>
        {students.map((student) => (
          <StudentRow student={student} />
        ))}
      </table>
    </>
  );
}
