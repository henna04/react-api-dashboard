function StudentDetails({ student, onClose }) {
  if (!student) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <h2>{student.name}</h2>

        <div className="details">
          <p>
            <strong>Username:</strong> {student.username}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

          <p>
            <strong>Phone:</strong> {student.phone}
          </p>

          <p>
            <strong>Website:</strong> {student.website}
          </p>

          <h3>Address</h3>

          <p>
            {student.address.street}, {student.address.suite}
          </p>

          <p>
            {student.address.city} - {student.address.zipcode}
          </p>

          <h3>Company</h3>

          <p>
            <strong>Name:</strong> {student.company.name}
          </p>

          <p>
            <strong>Business:</strong> {student.company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;