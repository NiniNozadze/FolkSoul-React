import "./SocialNetworks.css";
const SocialNetworks = () => {
  const socialLinks = [
    {
      id: 1,
      name: "YouTube",
      imageUrl: "./Images/Youtube.svg",
      link: "https://www.facebook.com/NanukaZhorzholianiShow",
    },
    {
      id: 2,
      name: "Facebook",
      imageUrl: "./Images/facebook.svg",
      link: "https://www.facebook.com/NanukaZhorzholianiShow",
    },
    {
      id: 3,
      name: "Twitter",
      imageUrl: "./Images/twitter.svg",
      link: "https://www.facebook.com/NanukaZhorzholianiShow",
    },
  ];

  return (
    <div className="social">
      <h2 className="socialuriBmulebi">სოციალური ბმულები</h2>
      <hr />
      {socialLinks.map((socialLink) => (
        <div key={socialLink.id} className="socialLink">
          <div className="socialsDiv">
            <img
              className="yt"
              src={socialLink.imageUrl}
              alt={socialLink.name}
            />
            <img
              className="cmBack"
              src="./Images/Camera bg.svg"
              alt="Camera Background"
            />
            <img className="cameraImg" src="./Images/Camera.svg" alt="Camera" />
            <h3 className="networks">{socialLink.name}</h3>
            <a
              className="links"
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="CTA"
                src="./Images/CTA Btns.svg"
                alt="Call to Action Button"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialNetworks;
