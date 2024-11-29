import { useState } from "react";

const bank = () => {
  const [totalBalance, setTotalBalance] = useState(1420);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalWithdraw, setTotalWithdraw] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const Deposit_btn = () => {
    const depositValue = Number(depositAmount);
    if (depositValue <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
    setTotalDeposit((prevDeposit) => prevDeposit + depositValue);
    setTotalBalance((prevBalance) => prevBalance + depositValue);
    setDepositAmount("");
  };

  const Withdraw_btn = () => {
    const withdrawValue = Number(withdrawAmount);
    if (withdrawValue <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }
    if (withdrawValue > totalBalance) {
      alert("Insufficient Balance");
    } else {
      setTotalWithdraw((prevWithdraw) => prevWithdraw + withdrawValue);
      setTotalBalance((prevBalance) => prevBalance - withdrawValue);
      setWithdrawAmount("");
    }
  };

  return (
    <body>
      <h1 className="text-center font-bold text-3xl p-3 text-orange-600">
        Bank
      </h1>

      <main className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-3/4 md:grid-cols-3 gap-4 p-4 mx-auto">
          <div className="text-white text-lg font-semibold bg-gradient-to-r from-green-600 to-green-400 p-4 rounded">
            <h3>Deposit</h3>
            <h3>
              $ <span>{totalDeposit} </span>
            </h3>
          </div>

          <div className="text-white text-lg font-semibold bg-gradient-to-r from-rose-600 to-rose-400 p-4 rounded">
            <h3>Withdraw</h3>
            <h3>
              $ <span>{totalWithdraw}</span>
            </h3>
          </div>

          <div className="text-white text-lg font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 p-4 rounded">
            <h3>Balance</h3>
            <h3>
              $<span>{totalBalance}</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-3/4 mx-auto">
          <div className="text-white text-lg bg-gradient-to-r from-purple-600 to-purple-400 p-6 rounded-lg">
            <h3 className="text-xl font-semibold pb-2">Please Deposit</h3>
            <input
              type="number"
              value={depositAmount}
              onChange={(depositValue) =>
                setDepositAmount(depositValue.target.value)
              }
              placeholder="$ Amount you want to deposit"
              className="w-3/4 p-2 rounded mb-4 text-black"
            />
            <br />
            <button
              onClick={Deposit_btn}
              className="bg-orange-500 hover:bg-orange-600 py-2 px-6 rounded"
            >
              Deposit
            </button>
          </div>

          <div className="text-white text-lg bg-gradient-to-r from-teal-600 to-teal-400 p-6 rounded-lg">
            <h3 className="text-xl font-semibold pb-2">Please Withdraw</h3>
            <input
              value={withdrawAmount}
              id="withdraw-money"
              onChange={(withdrawValue) =>
                setWithdrawAmount(withdrawValue.target.value)
              }
              type="number"
              placeholder="$ Amount you want to withdraw"
              className="w-3/4 p-2 rounded mb-4 text-black"
            />
            <br />
            <button
              onClick={Withdraw_btn}
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded"
            >
              Withdraw
            </button>
          </div>
        </div>
      </main>
    </body>
  );
};

export default bank;
