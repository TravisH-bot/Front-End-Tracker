import "./Challenges.styles.css";

const Challenges = () => {
  return (
    <>
      <div className="gallery">
        <h1>Challenges Page</h1>
        <p>
          Section to come containing the front end challenges I attempt and
          their intended outcome
        </p>
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="two dogs running"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="brown lab dog with tongue out"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
            alt="three puppies"
            className="gallery-image"
          />
        </div>
      </div>
    </>
  );
};

export default Challenges;
