import Button from "@/components/Button";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import RadioButton from "@/components/RadioButton";
import Switch from "@/components/Switch";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFriendi, setIsFriendi] = useState("base");
  const [isEn, setIsEn] = useState("en");
  const [isBtn, setIsBtn] = useState(false);
  const [isRadioBtn, setIsRadioBtn] = useState(false);
  const [isTypography, setIsTypography] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove(
      "base",
      "friendi",
      "virgin",
      "vcr",
      "friendiPay"
    );
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
    setIsEn(newLang);
  };

  return (
    <div className="min-h-screen p-5 bg-backgroundPrimary">
      <div className="flex justify-end mb-5 gap-4">
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 font-medium"
          style={{
            backgroundColor:
              isFriendi === "base"
                ? "var(--background-interactive-primary) "
                : "transparent",
            color:
              isFriendi === "base"
                ? "var(--text-on-button-primary)"
                : "var(--text-primary)",
          }}
          onClick={() => setIsFriendi("base")}
        >
          Base
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 font-medium"
          style={{
            backgroundColor:
              isFriendi === "virgin"
                ? "var(--background-interactive-primary)"
                : "transparent",
            color:
              isFriendi === "virgin"
                ? "var(--text-on-button-primary)"
                : "var(--text-primary)",
          }}
          onClick={() => setIsFriendi("virgin")}
        >
          virgin Mobile
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 font-medium"
          style={{
            backgroundColor:
              isFriendi === "vcr"
                ? "var(--background-interactive-primary)"
                : "transparent",
            color:
              isFriendi === "vcr"
                ? "var(--text-on-button-primary)"
                : "var(--text-primary)",
          }}
          onClick={() => setIsFriendi("vcr")}
        >
          VCR
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 font-medium"
          style={{
            backgroundColor:
              isFriendi === "friendiPay"
                ? "var(--background-interactive-primary)"
                : "transparent",
            color:
              isFriendi === "friendiPay"
                ? "var(--text-on-button-primary)"
                : "var(--text-primary)",
          }}
          onClick={() => setIsFriendi("friendiPay")}
        >
          Friendi Pay
        </button>
        <button
          className="rounded-lg border-borderPrimary border-2 p-2 font-medium"
          style={{
            backgroundColor:
              isFriendi === "friendi"
                ? "var(--background-interactive-primary)"
                : "transparent",
            color:
              isFriendi === "friendi"
                ? "var(--text-on-button-primary)"
                : "var(--text-primary)",
          }}
          onClick={() => setIsFriendi("friendi")}
        >
          Friendi Mobile
        </button>
        {isFriendi !== "base" && (
          <button
            onClick={handleToggle}
            className="bg-primary rounded-full border-borderPrimary border-2 p-2 text-backgroundSecondary font-medium"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        )}
        <button
          onClick={handleToggleLanguage}
          className="bg-backgroundSecondary px-3 rounded-full border-borderPrimary p-0 text-primary font-medium"
        >
          {isEn === "en" ? "AR" : "EN"}
        </button>
      </div>
      <div className="flex gap-5 my-4">
        <Checkbox checked={true} label="large checked checkbox" size="large" />
        <Checkbox
          checked={false}
          label="large unchecked checkbox"
          size="large"
        />
        <Checkbox
          checked={false}
          intermediate={true}
          label="large Intermediate checkbox"
          size="large"
        />
        <Checkbox checked={true} label="Small checked checkbox" />
        <Checkbox checked={false} label="Small unchecked checkbox" />
        <Checkbox
          checked={false}
          intermediate={true}
          label="Small Intermediate checkbox"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Button
          text="All Switch Buttons"
          size="large"
          type="primary"
          rightIcon={isSwitch ? "▵" : "▿"}
          onClick={() => setIsSwitch(!isSwitch)}
        />
        {isSwitch && (
          <table className="bg-backgroundSecondary">
            <thead>
              <tr>
                <th className="border-2 px-4 py-2 text-left text-primary"></th>
                <th className="border-2 px-4 py-2 text-left text-primary">
                  Default
                </th>
                <th className="border-2 px-4 py-2 text-left text-primary">
                  Disabled
                </th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="border-2 px-4 py-2 font-bold text-primary">
                  Turned On
                </td>
                <td className="border-2 px-4 py-2">
                  <Switch checked={true} disabled={false} />
                </td>
                <td className="border-2 px-4 py-2">
                  <Switch checked={true} disabled={true} />
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 py-2 font-bold text-primary">
                  Turned Off
                </td>
                <td className="border-2 px-4 py-2">
                  <Switch checked={false} disabled={false} />
                </td>
                <td className="border-2 px-4 py-2">
                  <Switch checked={false} disabled={true} />
                </td>
              </tr>
            </tbody>
          </table>
        )}
        <Button
          text="All Radio Buttons"
          size="large"
          type="primary"
          rightIcon={isRadioBtn ? "▵" : "▿"}
          onClick={() => setIsRadioBtn(!isRadioBtn)}
        />
        {isRadioBtn && (
          <table className="py-5">
            <thead>
              <tr>
                <th className="border-2 px-4 py-2 text-left text-primary"></th>
                <th className="border-2 px-4 py-2 text-left text-primary">
                  Default
                </th>
                <th className="border-2 px-4 py-2 text-left text-primary">
                  Disabled
                </th>
                <th className="border-2 px-4 py-2 text-left text-primary">
                  Wihout Text
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 px-4 py-2 font-bold text-primary">
                  Selected
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton
                    label="Selected radio button"
                    checked={true}
                    onChange={() => {}}
                  />
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton
                    label="Disabled selected radio button"
                    checked={true}
                    disabled={true}
                    onChange={() => {}}
                  />
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton checked={true} onChange={() => {}} />
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 py-2 font-bold text-primary">
                  Unselected
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton
                    label="Unselected radio button text"
                    checked={false}
                    onChange={() => {}}
                  />
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton
                    label="Disabled unselected radio button"
                    checked={false}
                    disabled={true}
                    onChange={() => {}}
                  />
                </td>
                <td className="border-2 px-4 py-2">
                  <RadioButton checked={false} onChange={() => {}} />
                </td>
              </tr>
            </tbody>
          </table>
        )}
        <Button
          text="All Buttons"
          size="large"
          type="primary"
          rightIcon={isBtn ? "▵" : "▿"}
          onClick={() => setIsBtn(!isBtn)}
        />
        {isBtn && (
          <div className="overflow-x-auto py-5">
            <table className="min-w-[600px] w-full border-collapse mb-8">
              <thead>
                <tr>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Size
                  </th>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Primary
                  </th>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Secondary
                  </th>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Tertiary
                  </th>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Chip
                  </th>
                  <th className="border-2 px-4 py-2 text-left text-primary">
                    Chip Outlined
                  </th>
                </tr>
              </thead>
              <tbody>
                {["disabled", "large", "medium", "small"].map((size) => (
                  <tr key={size}>
                    <td className="border-2 px-4 py-2 font-bold capitalize text-primary">
                      {size}
                    </td>
                    <td className="border-2 px-4 py-2">
                      <Button
                        text={`${size} Primary`}
                        type="primary"
                        size={size === "disabled" ? "large" : size}
                        leftIcon="[]"
                        rightIcon="[]"
                        disabled={size === "disabled" ? true : false}
                      />
                    </td>
                    <td className="border-2 px-4 py-2">
                      <Button
                        text={`${size} Secondary`}
                        type="secondary"
                        size={size === "disabled" ? "large" : size}
                        leftIcon="[]"
                        rightIcon="[]"
                        disabled={size === "disabled" ? true : false}
                      />
                    </td>
                    <td className="border-2 px-4 py-2">
                      <Button
                        text={`${size} Tertiary`}
                        type="tertiary"
                        size={size === "disabled" ? "large" : size}
                        leftIcon="[]"
                        rightIcon="[]"
                        disabled={size === "disabled" ? true : false}
                      />
                    </td>
                    <td className="border-2 px-4 py-2">
                      <Button
                        text={`${size} Chip`}
                        chip="filled"
                        size={size === "disabled" ? "large" : size}
                        leftIcon="[]"
                        rightIcon="[]"
                        disabled={size === "disabled" ? true : false}
                      />
                    </td>
                    <td className="border-2 px-4 py-2">
                      <Button
                        text={`${size} Chip Outlined`}
                        chip="outlined"
                        size={size === "disabled" ? "large" : size}
                        leftIcon="[]"
                        rightIcon="[]"
                        disabled={size === "disabled" ? true : false}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Button
          text="All Typography"
          size="large"
          type="primary"
          rightIcon={isTypography ? "▵" : "▿"}
          onClick={() => setIsTypography(!isTypography)}
        />
        {isTypography && (
          <div className="flex flex-col gap-5">
            <h2 className=" text-[80px] font-bold bg-backgroundTertiary text-vcr_red-700">
              TITLES
            </h2>
            <div
              className={`flex text-start w-full text-title-xl font-bold bg-backgroundAccentPrimary`}
            >
              <h1 className="w-[500px] text-cobalt-800"> Title-xl-bold:</h1>
              <h1 className="text-midnight-800 ">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <div
              className={`flex text-start w-full text-title-lg font-regular bg-backgroundInvertPrimary`}
            >
              <h1 className="w-[500px] text-cobalt-500"> Title-lg-regular:</h1>
              <h1 className="text-midnight-500">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <div
              className={`flex text-start w-full text-title-md font-bold bg-backgroundTertiary`}
            >
              <h1 className="w-[500px] text-cobalt-400"> Title-md-bold:</h1>
              <h1 className="text-midnight-400">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <div
              className={`flex text-start w-full text-title-sm font-regular bg-backgroundInteractivePrimaryPressed`}
            >
              <h1 className="w-[500px] text-cobalt-200"> Title-sm-regular:</h1>
              <h1 className="text-midnight-200">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>

            <h2 className="text-[80px] font-bold bg-backgroundTertiary text-virgin_red-400">
              BODY
            </h2>
            <div
              className={`flex text-start w-full text-body-lg font-bold bg-backgroundInteractiveSecondaryPressed`}
            >
              <h1 className="w-[500px] text-vcr_grape-800"> Body-lg-bold:</h1>
              <h1 className="text-purple-800">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <div
              className={`flex text-start w-full text-body-md font-regular bg-backgroundAccentSecondary`}
            >
              <h1 className="w-[500px] text-vcr_grape-500">
                {" "}
                Body-md-regular:
              </h1>
              <h1 className="text-purple-500">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <div
              className={`flex text-start w-full text-body-sm font-bold bg-iconSecondary`}
            >
              <h1 className="w-[500px] text-vcr_grape-200"> Body-sm-bold:</h1>
              <h1 className="text-purple-300">
                {" "}
                The quick brown fox jumps over the lazy dog.
              </h1>
            </div>
            <h2 className="text-[80px] font-bold bg-backgroundTertiary text-virin_red-200">
              LABEL
            </h2>
            <div
              className={`flex text-start w-full text-label-md font-bold bg-iconAccentPrimary text-iconInteractiveDisabled`}
            >
              <h1 className="w-[500px]"> Label-md-bold:</h1>
              <h1> The quick brown fox jumps over the lazy dog.</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
