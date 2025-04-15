import { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import enIcon from "../../public/Images/english.png";
import arIcon from "../../public/Images/Arabic.png";
import frIcon from "../../public/Images/france.png";
import { Listbox, Transition } from "@headlessui/react";
import { FaCircleChevronDown } from "react-icons/fa6";

const languages = [
  { label: "English", value: "en", icon: enIcon },
  { label: "العربية", value: "ar", icon: arIcon },
  { label: "Français", value: "fr", icon: frIcon },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(
    languages.find((l) => l.value === i18n.language) || languages[0]
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    const selectedLang = languages.find((l) => l.value === lng);
    setSelected(selectedLang);
  };

  return (
    <Listbox value={selected.value} onChange={changeLanguage}>
      <div className="relative">
        <Listbox.Button className="flex items-center justify-between gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-[25px] w-full">
          <div className="flex items-center gap-2">
            <img src={selected.icon} alt={selected.label} className="w-5 h-5" />
            <span>{selected.label}</span>
          </div>
          <FaCircleChevronDown className="text-white text-lg" />
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Listbox.Options className="absolute mt-2 bg-[#fff] drop-shadow-sm rounded-lg w-full shadow-lg z-10">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.value}
                value={lang.value}
                className="flex items-center gap-2 px-4 py-2 text-dark hover:bg-secondary cursor-pointer"
              >
                <img src={lang.icon} alt={lang.label} className="w-5 h-5" />
                {lang.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default LanguageSwitcher;
