export default function StudentRow(props) {
  const student = props.student;
  const scores = student.scores.map((x) => x.score);
  const averageScore = Math.round(
    scores.reduce((x, y) => x + y) / scores.length
  );
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.bio}</td>
      <td>
        {scores.map((score) => (
          <p>{score}</p>
        ))}
      </td>
      <td>{averageScore}</td>
    </tr>
  );
}
