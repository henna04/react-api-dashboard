function StudentCard({ student, onClick }) {
  return (
    <div className="student-card" onClick={onClick}>
      <div className="avatar">
        {student.name.charAt(0)}
      </div>

      <h2>{student.name}</h2>

      <p>📧 {student.email}</p>
      <p>📱 {student.phone}</p>
      <p>🌐 {student.website}</p>

      <div className="student-info">
        <span>📍 {student.address.city}</span>
        <span>🏢 {student.company.name}</span>
      </div>

      <button type="button">View Details</button>
    </div>
  );
}

export default StudentCard;