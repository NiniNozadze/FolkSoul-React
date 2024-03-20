import "./FirstPage.css";
import { Link } from "react-router-dom";
const FirstPage = ({ onLoginClick }) => {
  return (
    <div>
      <Link>
        <h1 className="shesvla" onClick={onLoginClick}>
          შესვლა
        </h1>
      </Link>
      <div className="sacdeli">
        <div className="forCircle">
          <img src="./Images/Circle.svg" alt="" className="circle" />
          <img src="./Images/MainLogo.svg" alt="" className="logo" />
        </div>
        <div className="kvadrati">
          <p className="paragraph">
            დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
            დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის
            გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ
            იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება
            მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“
            ეწოდება. <br />
            დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს.
            ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა
            ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან.
            პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან
            და სწრაფად.
          </p>
        </div>
        <div className="items">
          <img className="fbBackground" src="./Images/fbBackgorund.svg" />
          <img className="fblogo" src="./Images/facebook.svg" />
          <img src="./Images/Youtube.svg" />
          <img src="./Images/twitter.svg" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
