import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <>
      <div className="block lg:hidden">
        <MenuMobile />
      </div>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>
    </>
  );
}
