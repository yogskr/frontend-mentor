import NavMenuMobile from './components/NavMobile';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Header>
        <NavMenuMobile />
      </Header>
      <About />
      <Projects />
    </>
  );
}
