import "../../styles/Form.css";

export const ContactForm = () => {
  return (
    <div className="form">
      <p className="form-title">貴社名</p>
      <input type="text" name="" id="" />
      <p className="form-title">
        お名前<span>*</span>
      </p>
      <input type="text" required />
      <p className="form-title">
        メールアドレス<span>*</span>
      </p>
      <input type="email" required />
      <p className="form-title">電話番号</p>
      <input type="tel" />
      <p className="form-title">
        お問い合わせ内容<span>*</span>
      </p>
      <textarea type="textarea" required rows={10} />
      <div className="form-btn-area">
        <button className="submit-btn">送信</button>
      </div>
    </div>
  );
};
