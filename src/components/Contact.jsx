import "../styles/Contact.css";
import { ContactForm } from "./ContactForm";
import Image from "../images/email.svg";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-title">
          <p className="contact-main-title">Contact</p>
          <p className="contact-subtitle">-お問い合わせ-</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div>
            <p>竹中優斗のWebサイトにご訪問いただき、ありがとうございます。</p>
            <p>
              お仕事のご依頼やご相談等ございましたらお気軽にご連絡ください。
            </p>
            <p>また、*は必須入力項目となりますのでご注意くださいませ。</p>
          </div>
          <div className="contact-image">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
