import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFriendi, setIsFriendi] = useState("");
  const [isEn, setisEn] = useState("en");

  useEffect(() => {
    document.documentElement.classList.remove("friendi", "virgin", "vcr", "friendiPay");
    isFriendi && document.documentElement.classList.add(isFriendi);
  }, [isFriendi]);

  useEffect(() => {
    document.documentElement.classList.remove("en", "ar");
    document.documentElement.classList.add(isEn);
  }, [isEn]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);
  };

  const handleToggleLanguage = () => {
    const newLang = isEn === "en" ? "ar" : "en";
    setisEn(newLang);
  };

  return (
    <div className="min-h-screen p-5 bg-backgroundPrimary">
      <div className="flex justify-end mb-5 gap-4">
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
          style={{
            backgroundColor:
              !isFriendi
                ? "var(--text-status-info-primary)"
                : "transparent",
          }}
          onClick={() => setIsFriendi("")}
        >
          Base
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
          style={{
            backgroundColor:
              isFriendi === "virgin"
                ? "var(--text-status-info-primary)"
                : "transparent",
          }}
          onClick={() => setIsFriendi("virgin")}
        >
          virgin Mobile
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
          style={{
            backgroundColor:
              isFriendi === "vcr"
                ? "var(--text-status-info-primary)"
                : "transparent",
          }}
          onClick={() => setIsFriendi("vcr")}
        >
          VCR
        </button>
          <button
          className="rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
          style={{
            backgroundColor:
              isFriendi === "friendiPay"
                ? "var(--text-status-info-primary)"
                : "transparent",
          }}
          onClick={() => setIsFriendi("friendiPay")}
        >
          Friendi Pay
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
          style={{
            backgroundColor:
              isFriendi === "friendi"
                ? "var(--text-status-info-primary)"
                : "transparent",
          }}
          onClick={() => setIsFriendi("friendi")}
        >
          Friendi Mobile
        </button>
        {isFriendi && (
          <button
            onClick={handleToggle}
            className="bg-backgroundSecondary rounded-full border-borderPrimary border-2 p-2 text-primary font-medium"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        )}

        <button
          onClick={handleToggleLanguage}
          className="bg-primary px-3 rounded-full border-borderPrimary p-0 text-backgroundSecondary font-medium"
        >
          {isEn === "en" ? "AR" : "EN"}
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-[80px] font-bold bg-backgroundTertiary text-invertPrimary">
          TITLES
        </h2>
        <div
          className={`flex text-start w-full text-title-xl font-bold bg-backgroundAccentPrimary text-accentSecondary`}
        >
          <h1 className="w-[500px]"> Title-xl-bold:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <div
          className={`flex text-start w-full text-title-lg font-regular bg-backgroundInvertPrimary text-invertPrimary`}
        >
          <h1 className="w-[500px]"> Title-lg-regular:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <div
          className={`flex text-start w-full text-title-md font-bold bg-backgroundTertiary text-secondary`}
        >
          <h1 className="w-[500px]"> Title-md-bold:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <div
          className={`flex text-start w-full text-title-sm font-regular bg-backgroundInteractivePrimaryPressed text-onButtonPrimary`}
        >
          <h1 className="w-[500px]"> Title-sm-regular:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>

        <h2 className="text-[80px] font-bold bg-backgroundTertiary text-invertPrimary">
          BODY
        </h2>
        <div
          className={`flex text-start w-full text-body-lg font-bold bg-backgroundInteractiveSecondaryPressed text-statusSuccessPrimary`}
        >
          <h1 className="w-[500px]"> Body-lg-bold:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <div
          className={`flex text-start w-full text-body-md font-regular bg-backgroundAccentSecondary text-feedbackErrorPrimary`}
        >
          <h1 className="w-[500px]"> Body-md-regular:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <div
          className={`flex text-start w-full text-body-sm font-bold bg-iconSecondary text-iconPrimary`}
        >
          <h1 className="w-[500px]"> Body-sm-bold:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
        <h2 className="text-[80px] font-bold bg-backgroundTertiary text-invertPrimary">
          LABEL
        </h2>
        <div
          className={`flex text-start w-full text-label-md font-bold bg-iconAccentPrimary text-iconInteractiveDisabled`}
        >
          <h1 className="w-[500px]"> Label-md-bold:</h1>
          <h1> The quick brown fox jumps over the lazy dog.</h1>
        </div>
      </div>
    </div>
  );
}
