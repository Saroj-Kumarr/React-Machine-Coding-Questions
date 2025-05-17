const AccordianCard = ({ index, handleToggle, faq, selectedIndex }) => {
  return (
    <div key={index}>
      <div
        className="flex justify-between items-center shadow-md rounded-md p-2"
        onClick={() => handleToggle(index)}
      >
        <h3 className="font-semibold">{faq.question}</h3>
        <span>{selectedIndex === index ? "-" : "+"}</span>
      </div>
      {selectedIndex === index && <p className="p-2">{faq.answer}</p>}
    </div>
  );
};

export default AccordianCard;
