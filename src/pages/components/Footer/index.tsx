import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao top
          <FaArrowCircleUp />
        </button>
        <section>
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/lidiane-cristina-diniz/'
              )
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/LidianeDiniz')}
          />
        </section>
      </div>
    </Container>
  );
}
