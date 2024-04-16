import { useAppStore } from "@/stores/app";
import closeIcon from "@/public/assets/icons/close-grey@2x.png";
import Image from "next/image";
import messageIcon from "@/public/assets/icons/message.png";
import phoneIcon from "@/public/assets/icons/phone.svg";
import { CONTACT } from "@/constants/240113/content";

export default function Contact() {
  const setContact = useAppStore((state) => state.setContact);
  const contactModal = useAppStore((state) => state.contactModal);

  return (
    <div
      className={`flex w-screen fixed inset-0 z-[50000] transition-opacity duration-500 h-screen bg-black bg-opacity-40 padded-horizontal shadow-md justify-center items-center
    ${contactModal ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
    >
      <div className="flex w-full py-10 px-10 flex-col rounded-sm bg-white gap-2 relative">
        <Image
          src={closeIcon}
          onClick={() => setContact(false)}
          width={20}
          height={20}
          alt="close"
          className="absolute top-5 right-5"
        />
        {CONTACT.map((contact, i) => {
          const { pre, name, phone } = contact;
          return (
            <div
              key={pre + name}
              className={`${
                i === 3 ? "mt-4" : ""
              } flex w-full justify-center gap-6`}
            >
              <div className="font-bold w-1/2 flex justify-end gap-1 items-center text-lg">
                <span className="font-normal text-sm mr-1">{pre}</span>
                {name}
              </div>
              <div className="flex w-1/2 gap-3 h-7 items-center">
                <Image
                  onClick={() => {
                    window.open(`tel:${phone}`);
                  }}
                  src={phoneIcon}
                  width={20}
                  className="m-1"
                  alt="phone"
                />
                <Image
                  onClick={() => {
                    window.open(`sms:${phone}`);
                  }}
                  src={messageIcon}
                  width={20}
                  className="m-1"
                  alt="message"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
