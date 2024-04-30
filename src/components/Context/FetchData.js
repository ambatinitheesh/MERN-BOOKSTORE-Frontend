import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch('https://api.github.com/users/defunkt/following');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const firstFiveFollowers = data.slice(0, 5);
        setFollowers(firstFiveFollowers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div>
      <h1>Followers of defunkt</h1>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} />
            {follower.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
