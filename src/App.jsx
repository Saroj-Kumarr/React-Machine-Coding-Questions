import DragAndDrop from "./components/DragAndDrop";

const App = () => {
  const initialData = {
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "Write unit test",
      "Integrate payment gateway",
    ],
    "In Progress": [
      "Develop authentication flow",
      "Implement responsive design",
    ],
    Completed: [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deploy initial version to staging",
    ],
  };

  return (
    <div className="mx-auto w-[800px] border-2 border-gray-200 h-screen">
      <DragAndDrop initialData={initialData} />
    </div>
  );
};

export default App;
