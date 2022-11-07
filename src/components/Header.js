import logo from '../logo.svg';

export default function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="Logo de Arround the U.S." />
    </section>
  );
}
