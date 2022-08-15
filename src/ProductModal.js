const ProductModal = ({ handleClose, show, children }) => {
  return (
    <div className={`ProductModal ${show ? "open" : "closed"}`}>{children}</div>
  );
};

export default ProductModal;
