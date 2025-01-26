export const SocialMedias = () => {
  return (
    <div className="flex items-center">
      <a href="https://www.instagram.com/">
        <img width={24} height={24} src="/svgs/instagram.svg" alt="Instagram Logo" />
      </a>
      <a href="https://www.facebook.com/">
        <img className="mx-6" width={24} height={24} src="/svgs/facebook.svg" alt="Facebook Logo" />
      </a>
      <a href="https://t.me/telegram">
        <img width={24} height={24} src="/svgs/telegram.svg" alt="Telegram Logo" />
      </a>
    </div>
  )
}