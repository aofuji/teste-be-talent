import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white mx-auto p-6 shadow-lg w-full">
      <Image src="/img/logo.png" alt="" width={71} height={50} className="h-4 relative" />
    </header>
  );
};

export default Header;
