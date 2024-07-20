const AlertDialog = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded shadow-lg z-10 flex items-center justify-center text-center w-36 h-10">
        {message}
      </div>
    </div>
  );
};

export default AlertDialog;
