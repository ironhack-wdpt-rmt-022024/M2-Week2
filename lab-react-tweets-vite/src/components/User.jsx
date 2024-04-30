// this is with rafc
export const User = ({ name, handle, timeStamp }) => {
  return (
    <div className="top">
      <span className="user">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
      <span className="timestamp">{timeStamp}</span>
    </div>
  );
};
// this is with rfce
// function User() {
//   return (
//     <div>User</div>
//   )
// }
// export default User
