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

const customNames = [
  "Aarav Sharma",
  "Ananya Menon",
  "Rahul Kumar",
  "Diya Thomas",
  "Arjun Nair",
  "Meera Joseph",
  "Adil Ahmed",
  "Sneha Raj",
  "Fahad Ali",
  "Amal Dev",
];

const customEmails = [
  "aarav@gmail.com",
  "ananya@gmail.com",
  "rahul@gmail.com",
  "diya@gmail.com",
  "arjun@gmail.com",
  "meera@gmail.com",
  "adil@gmail.com",
  "sneha@gmail.com",
  "fahad@gmail.com",
  "amal@gmail.com",
];

const customPhones = [
  "9876543210",
  "9876543211",
  "9876543212",
  "9876543213",
  "9876543214",
  "9876543215",
  "9876543216",
  "9876543217",
  "9876543218",
  "9876543219",
];

const customWebsites = [
  "aaravsharma.com",
  "ananyamenon.com",
  "rahulkumar.com",
  "diyathomas.com",
  "arjunnair.com",
  "meerajoseph.com",
  "adilahmed.com",
  "snehraj.com",
  "fahadali.com",
  "amaldev.com",
];

const customCities = [
  "Kochi",
  "Thrissur",
  "Kozhikode",
  "Malappuram",
  "Kannur",
  "Ernakulam",
  "Palakkad",
  "Kottayam",
  "Alappuzha",
  "Thiruvananthapuram",
];

const customCompanies = [
  "Tech Solutions",
  "Digital Works",
  "Code Studio",
  "Web Innovations",
  "NextGen Technologies",
  "Smart Solutions",
  "Creative Labs",
  "Cloud Systems",
  "Future Tech",
  "Innovate Hub",
];

const customAddresses = [
  "MG Road, Kochi",
  "Round South, Thrissur",
  "Beach Road, Kozhikode",
  "Civil Station, Malappuram",
  "Fort Road, Kannur",
  "Marine Drive, Ernakulam",
  "College Road, Palakkad",
  "KK Road, Kottayam",
  "Beach Road, Alappuzha",
  "Palayam, Thiruvananthapuram",
];

const updatedStudents = data.map((student, index) => ({
  ...student,
  name: customNames[index],
  email: customEmails[index],
  phone: customPhones[index],
  website: customWebsites[index],

  address: {
    ...student.address,
    street: customAddresses[index],
    suite: "",
    city: customCities[index],
  },

  company: {
    ...student.company,
    name: customCompanies[index],
  },
}));

setStudents(updatedStudents);
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