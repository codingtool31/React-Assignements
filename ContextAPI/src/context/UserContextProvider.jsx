

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add PropTypes validation
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a React node
};

export default UserContextProvider;
