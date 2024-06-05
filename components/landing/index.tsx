"use client";
import Image from "next/image";
import CustomButton from "./button";

export default function LandingPage() {
  const description =
    "not entirely sure about wine but i guess we're figuring out together!";

  const onNewTab = (url: string) => {
    window.open(`https://${url}`, "_blank");
  };
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('images/landing/background.webp')]">
      <div className="w-screen h-screen flex flex-col justify-center items-center font-montserrat text-center">
        <Image
          className="rounded-[50%]"
          width={100}
          height={100}
          src="images/landing/logo.webp"
          alt=""
        />
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-[20px]">Wine1O1</h3>
          <div className="text-[16px] leading-[20px] whitespace-pre-wrap break-words">
            {description}
          </div>
        </div>
        <div className="flex-col flex gap-4 my-8">
          <CustomButton onClick={() => onNewTab("www.instagram.com/w.ine101")}>
            <Image
              width={36}
              height={36}
              src="images/icons/instagram.webp"
              className="rounded-lg"
              alt=""
            />
            <div className="w-full">Instagram</div>
            <div className="w-[36px]" />
          </CustomButton>
          <CustomButton onClick={() => onNewTab("lin.ee/TATP6C2")}>
            <Image
              width={36}
              height={36}
              src="images/icons/line.webp"
              className="rounded-lg"
              alt=""
            />
            <div className="w-full">LINE</div>
            <div className="w-[36px]" />
          </CustomButton>
          <CustomButton onClick={() => onNewTab("wine101.wine")}>
            <Image width={36} height={36} src="images/logo.webp" alt="" />
            <div className="w-full">
              Website (Order online: 50+ wines await your selection)
            </div>
            <Image
              width={36}
              height={36}
              src="images/icons/sale.webp"
              className="rounded-lg"
              alt=""
            />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
