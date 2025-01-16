import TicTacToe from "./components/TicTacToe";

const App = () => {
  return (
    <div className="mx-auto w-[800px] bg-gray-800 text-slate-200 h-screen">
      <TicTacToe size={4} />
    </div>
  );
};

export default App;
