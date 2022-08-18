import Header from "../components/Header/Header";

const NotFound = () => (
  <>
    <Header />

    <h2
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
      }}
    >
      404 Page Not Found! 😔
    </h2>
  </>
);

export default NotFound;
