import { useState } from "preact/hooks";

export const EditProfileModal = ({ firstname, lastname, email, phone }) => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
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
            <TextInput name="firstname" value="chai" />
            <TextInput name="lastname" value="mee" />
          </div>
        </div>
      </>
    );
  };

  const TextInput = ({
    name,
    placeholder,
    onChange,
    input,
    setInput,
    value,
  }) => {
    return (
      <>
        <div className="w-full z-20">
          <label htmlFor={name} className="flex flex-col text-xl">
            <input
              type="text"
              id={name}
              name={name}
              className="form-input mt-1 w-full text-xl rounded-md  border-gray-400 shadow-sm focus:border-juicy-100 focus:ring focus:ring-juicy-100 focus:ring-opacity-30"
              onChange={handleChange}
              placeholder={placeholder}
              value={value}
              required
            />
          </label>
        </div>
      </>
    );
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {

  };

  const handleReset = () => {

  };
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4">
        <img src="/image/edit.svg" alt="edit" />
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="text-juicy-200 text-3xl lg:text-4xl font-bold tracking-wide mb-2 md:mb-5 border-b-2 border-b-juicy-200">
            Edit Account
          </div>

          <div className="space-y-2 m-5">
            <NameDetail label="Name" img="/image/person.svg" />
            <ProfileDetail label="Email" value={email} img="/image/mail.svg" />
            <ProfileDetail label="Phone" value={phone} img="/image/phone.svg" />
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
