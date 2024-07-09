import { RedirectType, redirect } from "next/navigation";
const IS_SERVER = typeof window === "undefined";
// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  !IS_SERVER
    ? redirect(
        navigator.language.includes("-")
          ? `/${navigator.language.split("-")[0]}`
          : `/${navigator.language}`,
        RedirectType.push
      )
    : redirect("/en", RedirectType.push);
}
