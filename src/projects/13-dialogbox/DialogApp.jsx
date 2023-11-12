import React, { useState } from "react";

const SimpleDialog = () => {
  // State to track the visibility of the dialog
  const [isDialogOpen, setDialogOpen] = useState(false);

  // Function to open the dialog
  const openDialog = () => {
    setDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {/* Button to open the dialog */}
      <button onClick={openDialog}>Open Dialog</button>

      {/* Dialog box */}
      {isDialogOpen && (
        <div className="dialog">
          <div className="alert alert-info" role="alert">
            <div className="dialog-content">
              {/* Content of the dialog */}
              <p>This is a simple dialog box.</p>

              {/* Button to close the dialog */}
              <button onClick={closeDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleDialog;
