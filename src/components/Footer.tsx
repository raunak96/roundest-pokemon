import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-4 flex w-full justify-center border-t border-gray-100 border-opacity-10 pt-2 text-center text-xl sm:text-2xl">
      <a
        href="https://github.com/raunak96"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <span className="px-4">{"-"}</span>
      <Link href="/results">Results</Link>
      <span className="px-4">{"-"}</span>
      <Link href="/about">About</Link>
    </footer>
  );
};
export default Footer;
