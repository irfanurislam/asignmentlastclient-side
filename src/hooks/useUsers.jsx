import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://side-of-server.vercel.app/users'); // Replace YOUR_PORT with the appropriate port number
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return userData;
};

export default useUsers;
