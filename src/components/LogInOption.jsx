import { Link } from "react-router-dom";
import Azure from "../assets/logo-pack/azure.svg";
import Bit from "../assets/logo-pack/bit.svg";
import GitHub from "../assets/logo-pack/github.svg";
import SSO from "../assets/logo-pack/sso.svg";
import Fox from "../assets/logo-pack/fox.svg";

const LogInOption = ({ tabChange }) => {
  const SAAS = [
    {
      logo: GitHub,
      title: "Sign in With Github",
      url: "sign-with-github",
    //   id: crypto.randomUUID(),
    },
    {
      logo: Bit,
      title: "Sign in With Bit Bucket",
      url: "sign-with-bitbucket",
    //   id: crypto.randomUUID(),
    },
    {
      logo: Azure,
      title: "Sign in With Azure Devops",
      url: "sign-with-azure-devops",
    //   id: crypto.randomUUID(),
    },
    {
      logo: Fox,
      title: "Sign in With Azure",
      url: "sign-with-azure",
    //   id: crypto.randomUUID(),
    },
  ];

  const SelfHosted = [
    {
      logo: Azure,
      title: "Sign in With GitLab",
      url: "sign-with-gitlab",
    //   id: crypto.randomUUID(),
    },
    {
      logo: SSO,
      title: "Sign in With SSO",
    //   id: crypto.randomUUID(),
      url: "sign-with-sso",
    },
  ];

  return !tabChange
    ? SAAS.map((op) => (
        <Link
          to={`/${op.url}`}
        //   state={op.id}
          key={op.title}
          className="max-w-sm w-full hover:bg-slate-300  flex items-center gap-2 justify-center p-3 rounded-lg min-h-14 shadow-lg shadow-slate-300"
        >
          <img src={op.logo} alt={"logo"} />
          <p>{op.title}</p>
        </Link>
      ))
    : SelfHosted.map((op) => (
        <Link
          to={`/${op.url}`}
          key={op.title}
        //   state={op.id}
          className="max-w-sm w-full hover:bg-slate-300  flex items-center gap-2 justify-center  p-3 rounded-lg min-h-14 shadow-lg shadow-slate-300"
        >
          <img src={op.logo} alt={"logo"} />
          <p>{op.title}</p>
        </Link>
      ));
};

export default LogInOption;
