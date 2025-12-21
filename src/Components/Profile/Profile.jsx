import styles from './Profile.module.css';

export const Profile = ({ userInfo }) => {
  const { username, tag, location, avatar, stats } = userInfo;

  return (
    <div className={styles.profileCard}>
      <img className={styles.profileImage} src={avatar} alt={username} />

      <h1 className={styles.profileName}>{username}</h1>
      <p className={styles.profileUsername}>@{tag}</p>
      <p className={styles.profileLocation}>{location}</p>

      <ul className={styles.profileStats}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={styles.profileStat}>
            <span className={styles.profileStatLabel}>{key}</span>
            <span className={styles.profileStatNumber}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
