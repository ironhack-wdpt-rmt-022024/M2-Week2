const ProfileImage = ({ image }) => {
  console.log("here is the image in our component", image);
  return <img src={image} className="profile" alt="profile" />;
};
export default ProfileImage;
