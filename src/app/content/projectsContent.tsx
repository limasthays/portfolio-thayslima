import MultistepFormMockup from '../assets/images/multistep-form-screenshot.png'
import StackhubMockup from '../assets/images/stackhub-screenshot.png'
import MiniBlogMockup from '../assets/images/mini-blog-screenshot.png'
import ProximoAndarMockup from '../assets/images/proximo-andar-screenshot.png'

export const projectsContent = [
	{
		img: ProximoAndarMockup,
		projectTags: 'projeto profissional',
		title: 'Próximo Andar',
		techs: 'react + next, javascript + typescript, tailwind css',
		links: [
			{
				title: 'website',
				link: 'https://proximoandar.com/',
			},
		],
		about: (
			<>
				Próximo Andar é um site de compartilhamento de experiências e avaliação
				de condomínios residenciais.
				<br />
				Atuei como Desenvolvedora Front-End, otimizei a experiência do usuário
				na aplicação e também contribuí com a otimização do fluxo de dados no
				Back-End.
			</>
		),
	},
	{
		img: MultistepFormMockup,
		projectTags: 'estudo de caso',
		title: 'multistep form',
		techs: 'react + next // javascript + typescript // sass',
		links: [
			{
				title: 'website',
				link: 'https://sass-multistep-form.vercel.app/',
			},
			{
				title: 'github',
				link: 'https://github.com/limasthays/sass-multistep-form',
			},
		],
		about:
			'Essa aplicação apresenta um formulário com vários passos de preenchimento. Nele, cada campo preenchido em um passo interfere no próximo passo, exigindo cuidado especial com o gerenciamento de estados. Usei esse case para aprender e praticar a ferramenta SASS no estilo da página.',
	},
	{
		img: StackhubMockup,
		projectTags: 'estudo de caso',
		title: 'Stackhub',
		techs: 'react + next // javascript + typescript // tailwind css',
		links: [
			{
				title: 'website',
				link: 'https://stackhub.vercel.app/',
			},
			{
				title: 'github',
				link: 'https://github.com/limasthays/stackhub',
			},
		],
		about: (
			<>
				Stackhub é uma aplicação que permite aos usuários que criem e façam
				login em seus perfis, cadastrem e editem tecnologias que eles usam. Essa
				é uma versão refatorada e com visual novo de um projeto original criado
				no curso de dev. Front-End na Kenzie Academy.{' '}
				<a
					href="https://github.com/limasthays/react-entrega-s2-kenzie-hub-limasthays"
					className="underline"
					target="_blank"
				>
					Confira a primeira versão.
				</a>
			</>
		),
	},
	{
		img: MiniBlogMockup,
		projectTags: 'estado de caso',
		title: 'Mini blog',
		techs: 'react // javascript // styled components',
		links: [
			{
				title: 'website',
				link: 'https://mini-blog-nu.vercel.app/',
			},
			{
				title: 'github',
				link: 'https://github.com/limasthays/mini-blog',
			},
		],
		about: (
			<>
				Uma espécie de rede social fictícia (um pouco parecida com o twitter)
				onde é possível enviar posts, ver os posts de outros usuários na
				timeline, consultar o perfil e visualizar álbuns e fotos de cada
				usuário.
				<br />
				Os dados de posts e afins, exceto os ícones de perfil, vem de uma API de
				dados fictícios (JSON placeholder).
			</>
		),
	},
]
