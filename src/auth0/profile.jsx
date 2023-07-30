const Profile = ({ user }) => {
  console.log('====================================');
  console.log('rendered');
  console.log('====================================');
  return (
    <>
      <div className="text-center">
        <img className="m-auto" src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  );
};

export default Profile;
