import "./Burgerbar.css";
const Burgerbar = () => {
  return (
    <div className="justDiv">
      <div className="home">
        <div className="same">
          <img src="./Images/Home Icon.svg" />
          <h2 className="headings">მთავარი</h2>
        </div>
        <div className="same">
          <img src="./Images/Member Icon.svg" />
          <h2 className="headings">ჯგუფის წევრები</h2>
        </div>
        <div className="same">
          <img src="./Images/Youtube Icon.svg" />
          <h2 className="headings">სოციალური ბმულები</h2>
        </div>
        <div className="same">
          <img src="./Images/Musical Key.svg" />
          <h2 className="headings">ბენდის შესახებ</h2>
        </div>
        <div className="same">
          <img src="./Images/Door Icon.svg" />
          <h2 className="headings">გადი გარეთ</h2>
        </div>
      </div>
    </div>
  );
};

export default Burgerbar;
