interface Job {
  id: string;
  position: string;
  company: string;
  note: string;
}

const JobCard: React.FC<Job> = ({ id, position, company, note }) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{position}</h2>
      <p>
        <strong>Společnost:</strong> {company}
      </p>
      <p>
        <strong>Poznámka:</strong> {note}
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
    </div>
  );
};

export default JobCard;
