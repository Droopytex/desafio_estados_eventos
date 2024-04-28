import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ social }) => {
  let icon = null;
  switch (social) {
    case "facebook":
      icon = faFacebook;
      break;
    case "linkedin":
      icon = faLinkedinIn;
      break;
    case "github":
      icon = faGithub;
      break;
    default:
      break;
  }
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "#000000" }}
        size="2x"
        className="mx-2 "
      />
    </>
  );
};

export default SocialButton;
