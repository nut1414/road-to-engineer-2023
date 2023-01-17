import { useEffect, useState } from "preact/hooks";
import { useAuth } from "../../contexts/AuthContext";

export const EditProfileModal = ({ user }) => {
  const { logout } = useAuth();
  const [input, setInput] = useState({
    ...user, 
    firstname: user.name.split(' ')[0],
    lastname: user.name.split(' ')[1],
  });


  const ProfileDetail = ({ img, value, label }) => {
    return (
      <>
        <div className="flex flex-row space-x-4 items-center">
          <div id="picture" className="flex justify-center items-center">
            <img src={img} alt="" className="h-8 w-8 md:h-12 md:w-12" />
          </div>
          <div className="flex flex-col text-juicy-200 w-full">
            <h2 className="font-bold text-lg md:text-3xl">{label}</h2>
            <TextInput name={label.toLowerCase()} value={value} />
          </div>
        </div>
      </>
    );
  };

  const NameDetail = ({ img, label }) => {
    return (
      <>
        <div className="flex flex-row space-x-4 items-center">
          <div id="picture" className="flex justify-center items-center">
            <img src={img} alt="" className="h-8 w-8 md:h-12 md:w-12" />
          </div>
          <div className="flex flex-col text-juicy-200 w-full">
            <h2 className="font-bold text-lg md:text-3xl">{label}</h2>
            <TextInput name="firstname" value={input.firstname} />
            <TextInput name="lastname" value={input.lastname}/>
          </div>
        </div>
      </>
    );
  };

  const handleChange = (e) => {
    const newState = { ...input, [e.target.id]: e.target.value }
    setInput(newState);
  };

  const TextInput = ({
    name,
    placeholder,
    value,
  }) => {
    return (
      <>
        <div className="w-full z-20">
          <label className="flex flex-col text-xl">
            <input
              type="text"
              id={name}
              name={name}
              className="form-input mt-1 w-full text-xl rounded-md  border-gray-400 shadow-sm focus:border-juicy-100 focus:ring focus:ring-juicy-100 focus:ring-opacity-30"
              onChange={handleChange}
              placeholder={placeholder}
              value={value}
              
            />
          </label>
        </div>
      </>
    );
  };

  

  const handleSubmit = () => {
    console.log(input);
  };

  const handleReset = () => {
    setInput({
      ...user,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  };

  useEffect(() => {console.log(input)},[input])

  
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4">
        <img src="/image/edit.svg" alt="edit" />
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label className="modal cursor-pointer">
        <label className="modal-box relative">
          <div className="text-juicy-200 text-3xl lg:text-4xl font-bold tracking-wide mb-2 md:mb-5 border-b-2 border-b-juicy-200">
            Edit Account
          </div>

          <div className="space-y-2 m-5">
            <NameDetail label="Name" img="/image/person.svg" />
            <ProfileDetail label="Email" img="/image/mail.svg" value={user.email}/>
            <ProfileDetail label="Phone" img="/image/phone.svg" value={user.phone}/>
          </div>

          <div className="flex w-full gap-x-6 ">
            <button
              className="w-full text-white shadow-lg shadow-black/25 font-bold text-lg md:text-3xl bg-juicy-100 rounded-xl py-0.5"
              onClick={() => {handleSubmit}}
            >
              Confirm
            </button>
            <button className="w-full text-white shadow-lg shadow-black/25 font-bold text-lg md:text-3xl bg-juicy-100 rounded-xl py-0.5"
            onClick={()=> {handleReset}}
            >
              Reset
            </button>
          </div>
        </label>
      </label>
    </>
  );
};
