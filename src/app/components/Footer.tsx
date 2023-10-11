import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import CopyMyEmail from './CopyMyEmail'

function Footer() {
	const [emailCopied, setEmailCopied] = useState(false)

	const handleCopyEmail = () => {
		navigator.clipboard.writeText('limasthays@gmail.com')
		setEmailCopied(true)

		setTimeout(() => {
			setEmailCopied(false)
		}, 5000)
	}

	const socialMedia = [
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/limasthays/',
			icon: <FaLinkedin />,
		},
		{
			title: 'Github',
			link: 'https://github.com/limasthays',
			icon: <FaGithub />,
		},
	]

	return (
		<div className="p-10 pb-20 md:pb-24 md:pt-16 flex gap-5 flex-col md:flex-row md:justify-evenly items-center bg-main-violet">
			<div>
				<p className="text-2xl md:text-3xl font-bold">
					Let&apos;s work together!
				</p>
				<div className="mt-1 md:mt-0">
					{socialMedia.map((item) => (
						<a
							key={item.title}
							href={item.link}
							className="flex gap-2 items-center underline font-semibold text-lg"
						>
							{item.icon}
							{item.title}
						</a>
					))}
				</div>
			</div>
			<CopyMyEmail />
		</div>
	)
}

export default Footer
