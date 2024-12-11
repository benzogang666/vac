import "./Start.css";
import { NavLink, Link } from "react-router-dom";

const Start = () => {
  const copy = (event) => {
    const textToCopy = event.currentTarget.innerText;
    navigator.clipboard.writeText(textToCopy);
  };

  const handleInstagramClick = (event) => {
    event.preventDefault(); // Останавливает стандартное поведение ссылки
    const isConfirmed = window.confirm("Открыт профиль @alikhan_kaiyrbay");
    if (isConfirmed) {
      // Попробовать открыть профиль в приложении Instagram
      window.location.href = "instagram://user?username=alikhan_kaiyrbay";
    }
  };

  return (
    <>
      <Link
        to="https://www.instagram.com/alikhan_kaiyrbay"
        className="author"
        onClick={handleInstagramClick}
      >
        @alikhan_kaiyrbay
      </Link>

      <div className="start">
        <div className="header">
          <div className="header-image"></div>
          <div className="header-appellation">Crown</div>
          <div className="header-link">
            <NavLink className="header-menu" to="/menu">
              Перейти в Меню
            </NavLink>
          </div>
        </div>
        <div className="body">
          <div className="contacts">
            <div className="contact">Контакты</div>
            <div className="contact">+7 777 77 77 777</div>
            <div className="contact">+7 777 77 77 777</div>
            <div className="contact">+7 777 77 77 777</div>
          </div>
          <div className="networks">
            <div className="network">instagram</div>
            <div className="network">whatsapp</div>
          </div>
          <div className="contact">Оставьте отзыв</div>
          <div className="responses">
            <div className="response">2GIS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
