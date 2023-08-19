import LinkedinLogo from "../svg/LinkedinLogo";
import GmailLogo from "../svg/GmailLogo";
import WhatsappLogo from "../svg/WhatsappLogo";
import GithubLogo from "../svg/GithubLogo";

export default function Footer() {
  return (
    <footer className="flex h-40 flex-col items-center justify-center bg-neutral-900 py-5 text-center text-white md:h-32 md:flex-row">
      {/* Social Media section */}
      <div className="flex max-w-[600px] grow items-center justify-center">
        <div className="flex items-center justify-center">
          <LinkedinLogo />
          <GmailLogo />
          <GithubLogo />
          <WhatsappLogo />
        </div>
      </div>
      {/* Copyright section */}
      <div className="flex max-w-[600px] grow items-center justify-center text-center">
        © 2023 Copyright: &nbsp;
        <a className="text-whitehite" href="https://tailwind-elements.com/">
          Saud Alghamdi
        </a>
      </div>
    </footer>
  );
}
