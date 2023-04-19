const Notes = ({ title, description }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Notes;
