import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      message,
      email
    };

    emailjs
      .send(
        'service_aknw828',
        'template_sp7d0rr',
        templateParams,
        '-jBhxQOlUuDISqKWu'
      )
      .then(
        response => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          alert(`Mensagem foi encaminhada com sucesso ${name}!!!`);
        },
        err => {
          alert(
            'Sua mensagem não pode ser enviada, tente novamente mais tarde!'
          );
          console.log('Erro', err);
        }
      );
  }
  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="E-mail"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        required
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
