import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={160} height={55} alt="" />
    </Link>
  );
};

export default Logo;
