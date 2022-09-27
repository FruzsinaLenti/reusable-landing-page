const Header = (props) => {
  return (
    <nav className="w-full border-b-2 h-20 flex items-center ">
      {props.items &&
        props.items.map((item, index) => (
          <div key={index} className="text-lg m-4 underline inline max-w-max">
            {item.label}
          </div>
        ))}
    </nav>
  );
};

export default Header;

// const [allValues, setAllValues] = useState({
//   mobile: "",
//   username: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// });
// const changeHandler = (e) => {
//   setAllValues({ ...allValues, [e.target.name]: e.target.value });
// };
// return (
//   <input
//     type="text"
//     className="form-control"
//     id="mobile"
//     name="mobile"
//     placeholder="Enter a valid mobile number"
//     onChange={changeHandler}
//   />
//   // ...
// );
