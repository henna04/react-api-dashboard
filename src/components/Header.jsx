function Header({ studentCount }) {
  return (
    <header className="header">
      <div>
        <h1>Student Dashboard</h1>
        <p>Manage and explore student information</p>
      </div>

      <div className="student-count">
        <span>{studentCount}</span>
        <small>Total Students</small>
      </div>
    </header>
  );
}

export default Header;