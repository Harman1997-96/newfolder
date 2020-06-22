import Link from "next/link";

const Index = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
