import "./MyModal.css";

const MyModal = ({ children, visible, setVisible }) => {
  let myClass = "myModal";
  if (visible) {
    myClass += " myModalActive";
  }
  return (
    <div className={myClass} onClick={() => setVisible(false)}>
      <div className="myModalContent " onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
