import  { useRef } from "react";

const App = () => {
  const email = useRef();
  const password = useRef();

  const login = (data) => {
    data.preventDefault();

    const Email = email.current.value;
    const Password = password.current.value;

    if (Email === "admin@gmail.com" && Password === "123456") {
      window.location.href="/bank"; 
    } else {
      alert("Email or Password Wrong");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center pt-4 pb-4">
        Welcome to
        <span className="text-orange-500 font-bold">Bap Er Bank</span>!!!
      </h1>
      <main className="w-2/4 mx-auto bg-[#ffecd5]">
        <form onSubmit={login}>
          <div className="p-4">
            <h4 className="font-bold text-orange-500">Please Login</h4>
            <input
              ref={email}
              type="email"
              placeholder="Enter your email"
              required
              className="m-2 pl-2 w-3/4"
            />
            <br />
            <input
              ref={password}
              type="password"
              placeholder="Enter your password"
              required
              className="pl-2 m-2 w-3/4"
            />
            <br />
            <button
              type="submit"
              className="text-xs p-1 font-normal text-white bg-orange-500 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
