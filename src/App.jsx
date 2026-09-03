import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app">
      <Header studentCount={students.length} />

      <main>
        <SearchBar search={search} setSearch={setSearch} />

        {loading && <Loader />}

        {error && !loading && (
          <div className="error-message">
            <h3>Failed to load students.</h3>
            <button type="button" onClick={fetchStudents}>
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <StudentList
            students={filteredStudents}
            onStudentClick={setSelectedStudent}
          />
        )}
      </main>

      <StudentDetails
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
}

export default App;