import NavMenuMobile from './components/NavMobile';
import Header from './components/Header';
import About from './components/About';

export default function App() {
  return (
    <>
      <Header>
        <NavMenuMobile />
      </Header>
      <About />
    </>
  );
}
