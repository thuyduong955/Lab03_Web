import PropTypes from 'prop-types';

function UserProfile({ userData, theme = 'light' }) {
  // Use userData if provided, otherwise use default
  const user = userData || {
    name: 'Default User',
    email: 'user@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOS.jpg',
    imageSize: 90,
  };

  // Ensure we have all required fields
  const displayUser = {
    name: user.name || 'Unknown',
    email: user.email || 'No email',
    avatarUrl: user.avatarUrl || 'https://i.imgur.com/yXOvdOS.jpg',
    imageSize: user.imageSize || 90,
  };

  return (
    <div className={`profile-card theme-${theme}`}>
      <h2 style={{ color: 'white' }}>User Profile</h2>
      <img
        src={displayUser.avatarUrl}
        alt={displayUser.name}
        width={displayUser.imageSize}
        height={displayUser.imageSize}
        className="profile-avatar"
      />
      <p style={{ color: 'white' }}>Name: {displayUser.name}</p>
      <p style={{ color: 'white' }}>Email: {displayUser.email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }),
  theme: PropTypes.string,
};

export default UserProfile;
