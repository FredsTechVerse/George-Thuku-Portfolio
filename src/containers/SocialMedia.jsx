import { SocialMediaIcon } from "../components";
import twitter from "../assets/twitter_logo.webp";
import linkedIn from "../assets/linkedIn_logo.png";

const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">
      <SocialMediaIcon
        link="https://x.com/Saints_Georgi?t=hocJDE1RFPrseWrKtsZVeQ&s=09"
        icon={twitter}
      />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/george-gichuki-22420b207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        icon={linkedIn}
      />
    </section>
  );
};

export default SocialMedia;
