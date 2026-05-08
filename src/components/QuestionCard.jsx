const QuestionCard = ({ question, value, onChange, options }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>

      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default QuestionCard;
