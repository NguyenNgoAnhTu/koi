import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ContactPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const serviceCategoryId = queryParams.get('id');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu form ở đây
    console.log({ name, email, message, serviceCategoryId });
  };
  console.log(serviceCategoryId)
  return (
    <div className="container">
      <h2>Liên Hệ</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tin nhắn:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default ContactPage;