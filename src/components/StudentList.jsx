import StudentCard from "./StudentCard";

function StudentList({ students, onStudentClick }) {
  if (students.length === 0) {
    return (
      <div className="empty-message">
        <h3>No students found</h3>
        <p>Try searching with a different name or email.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onClick={() => onStudentClick(student)}
        />
      ))}
    </div>
  );
}

export default StudentList;