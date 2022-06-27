import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center desktop:px-6">
      <div className="w-full max-w-[1100px] flex mobile:flex-col mobile:items-stretch desktop:flex-row desktop:items-center justify-between mt-20 mx-auto">
        <div className="mobile:flex mobile:flex-col mobile:mb-8 mobile:px-8 mobile:text-center desktop:max-w-[620px] desktop:mb-0 desktop:px-0 desktop:text-start">
          <div className="mobile:mx-auto desktop:mx-0">
            <Logo />
          </div>

          <h1 className="mobile:text-4xl mt-8 laptop:text-[2.4rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="mobile:text-lg laptop:text-[1.4rem] mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="Ilustração de código em React" />
    </div>
  )
}