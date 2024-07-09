import { useSelector } from "react-redux";
import { getLocale } from "../features/locale";

interface useLocaleProps {}

const useLocale = () => {
  const locale = useSelector(getLocale);
  return locale;
};

export default useLocale;
