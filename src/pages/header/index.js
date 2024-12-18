export const Header = () => {
  return (
    <div>
        {/* For Logo */}
      <div className="d-flex flex-row-reverse bg-dark text-white py-2 shadow">
        {/* Logo Section */}
        <div className="d-flex align-items-center p-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="me-2"
            style={{ width: '40px', height: '40px' }}
          />
          <h1 className="h5 mb-0">Expense Management</h1>
        </div>
      </div>

    </div>
  );
};
