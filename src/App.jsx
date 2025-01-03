import StarRating from "./components/StarRating";

const App = () => {
  return (
    <div className="mx-auto w-[800px] border-2 border-gray-200 h-screen">
      <StarRating starCount={10} />
    </div>
  );
};

export default App;
