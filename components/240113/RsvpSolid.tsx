"use client";
import { useState } from "react";
import { useAppStore } from "@/stores/app";
import spinnerIcon from "@/public/assets/icons/spinner.svg";
import Image from "next/image";
import Title from "./Title";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RSVPSolid = () => {
  const [loading, setLoading] = useState(false);
  const setModal = useAppStore((state) => state.setModal);
  const [form, setForm] = useState({
    attending: true,
    side: "bride",
    name: "",
    extraGuests: "",
    message: "",
    meal: "yes",
  });

  const appendSpreadsheet = async (row: any) => {
    console.log(row);
    setLoading(true);
    try {
      const res = await fetch("/api/append", {
        method: "POST",
        body: JSON.stringify(row),
      });

      if (res.status === 200) {
        setLoading(false);
        setModal(false);
        setForm({
          attending: true,
          side: "groom",
          name: "",
          extraGuests: "",
          message: "",
          meal: "yes",
        });

        toast.success("제출이 완료되었습니다", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return res.json();
      }
    } catch (e) {
      toast.error("제출에 실패했습니다. 다시 시도해주세요. ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.error("Error: ", e);
      setLoading(false);
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    // if (Object.values(form).every((data) => !!data)) {
    const newRow = {
      Attending: form.attending ? "O" : "X",
      Side: form.side,
      Name: form.name ? form.name : "익명",
      ExtraGuests: form.extraGuests ? form.extraGuests : "",
      Meal: form.meal,
      Message: form.message ? form.message : "",
    };
    appendSpreadsheet(newRow);
    // }
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  return (
    <form
      id="rsvp"
      className="flex w-full pb-20 px-10 flex-col rounded-sm bg-beige gap-2 relative"
      onSubmit={submitForm}
    >
      <ToastContainer
        className="h-3"
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Title mainTitle="참석 의사 전달" />
      <p className="text-base text-center whitespace-pre pb-3 leading-snug">{`축하의 마음으로 참석해주시는\n모든 분들을 귀하게 모실 수 있도록\n참석 의사를 전달 부탁드립니다. 
`}</p>
      <hr className="w-full border-border-grey pb-3" />
      <div className="flex items-center justify-between">
        <div>참석 여부</div>
        <div className="flex justify-center w-[60%] transition-all duration-300 gap-4">
          <button
            type="button"
            className={`px-2 transition-[border] text-sm h-8 py-1 border-[1px] w-1/2 rounded-md ${
              form.attending === true
                ? "border-border-grey shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, attending: true })}
          >
            참석가능
          </button>
          <button
            type="button"
            className={`px-2 transition-[border] text-sm h-8 py-1 w-1/2 border-[1px] rounded-md ${
              form.attending === false
                ? "border-border-grey shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, attending: false })}
          >
            참석불가
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>구분</div>
        <div className="flex justify-center w-[60%] transition-all duration-300 gap-4">
          <button
            type="button"
            className={`px-2 text-sm h-8 py-1 w-1/2 border-[1px] rounded-md ${
              form.side === "bride"
                ? "border-border-grey shadow-md shadow-pink"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, side: "bride" })}
          >
            신부측
          </button>
          <button
            type="button"
            className={`px-2 transition-[border] text-sm h-8 py-1 w-1/2 border-[1px] rounded-md ${
              form.side === "groom"
                ? "border-border-grey shadow-md shadow-blue"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, side: "groom" })}
          >
            신랑측
          </button>
        </div>
      </div>
      <label className="flex items-center justify-between">
        <span className="text-gray-700">성함</span>
        <input
          required
          name="name"
          type="text"
          className="px-2 w-[60%] focus:outline-none py-1 h-8 border-[1px] rounded-md shadow-md border-border-grey"
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label className="flex items-center justify-between">
        <span className="text-gray-700">참석인원</span>
        <input
          required
          name="extraGuests"
          type="text"
          placeholder="본인 포함 총 참석인원"
          className="px-2 w-[60%] focus:outline-none py-1 h-8 text-xs border-[1px] rounded-md shadow-md border-border-grey"
          onChange={handleChange}
          value={form.extraGuests}
        />
      </label>
      <label className="flex items-center justify-between">
        <span className="text-gray-700">전달사항</span>
        <input
          name="message"
          type="text"
          maxLength={30}
          placeholder="30자 이내로 입력해주세요."
          className="px-2 w-[60%] text-xs h-8 focus:outline-none py-1 border-[1px] rounded-md shadow-md border-border-grey"
          onChange={handleChange}
          value={form.message}
        />
      </label>
      <div className="flex items-center justify-between">
        <div>식사 여부</div>
        <div className="flex justify-between w-[60%] transition-all duration-300 gap-4">
          <button
            type="button"
            className={`px-2 transition-[border] w-1/3 h-8 text-xs py-1 border-[1px] rounded-md ${
              form.meal === "yes"
                ? "border-border-grey shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, meal: "yes" })}
          >
            예정
          </button>
          <button
            type="button"
            className={`px-2 transition-[border] w-1/3 h-8 text-xs py-1 border-[1px] rounded-md ${
              form.meal === "no"
                ? "border-border-grey shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, meal: "no" })}
          >
            안함
          </button>
          <button
            type="button"
            className={`px-2 transition-[border] w-1/3 h-8 text-xs py-1 border-[1px] rounded-md ${
              form.meal === "maybe"
                ? "border-border-grey shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setForm({ ...form, meal: "maybe" })}
          >
            미정
          </button>
        </div>
      </div>
      {/* <label className="flex my-3 bg-white border-border-grey border-[1px] border-opacity-40 p-3 shadow-border-grey shadow-md flex-col gap-3">
          <div className="text-sm">개인정보 수집 및 이용 동의(필수)</div>
          <div className="text-border-grey text-[10px]">
            <div>
              참석여부 전달을 위한 개인정보 수집 및 이용에 동의해주세요.
            </div>
            <div>보유기간: 청첩장 이용 종료시 까지</div>
          </div>
          <div className="flex items-center gap-2">
            <div className={styles.checkBoxCool}>
              <input
                onClick={(e) => {
                  setForm({ ...form, privacyAccepted: !form.privacyAccepted });
                }}
                type="checkbox"
                id="check-23"
              />
              <label htmlFor="check-23">
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
            <div className="text-black text-xs">동의합니다</div>
          </div>
        </label> */}
      <button
        className="px-3 flex mt-4 justify-center h-10 items-center self-center py-1 shadow-md rounded-md w-40 border-[1px] border-border-grey relative disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <Image
            src={spinnerIcon}
            className="animate-spin"
            alt="spinner"
            width={20}
            height={20}
          />
        ) : (
          <div className="flex justify-center items-center gap-2">
            <p>참석의사보내기</p>
          </div>
        )}
      </button>
    </form>
  );
};

export default RSVPSolid;
