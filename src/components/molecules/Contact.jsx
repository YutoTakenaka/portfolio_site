import "../../styles/Contact.css";
import { ContactForm } from "./ContactForm";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

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
            <p>ご訪問いただきありがとうございます。</p>
            <p>ご依頼やご相談などお気軽にご連絡ください。</p>
            <p>
              <span>*</span>は必須入力項目です。
            </p>
          </div>
          <div className="contact-image">
            <a
              href="https://twitter.com"
              target="blank"
              rel="noopener"
              className="sns twitter"
            >
              <AiFillTwitterCircle size={80} />
            </a>
            <a
              href="https://www.instagram.com/eutu_ty/"
              target="blank"
              rel="noopener"
              className="sns instagram"
            >
              <AiOutlineInstagram size={80} />
            </a>
            <a
              href="https://github.com/YutoTakenaka"
              target="blank"
              rel="noopener"
              className="sns github"
            >
              <AiOutlineGithub size={80} />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
