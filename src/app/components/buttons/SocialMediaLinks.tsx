import { FaLinkedin, FaGithub, FaAddressCard } from 'react-icons/fa'

function SocialMediaLinks() {
	const socialLinks = [
		{
			title: 'LinkedIn',
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/limasthays/',
		},
		{
			title: 'Githun',
			icon: <FaGithub />,
			link: 'https://github.com/limasthays',
		},
		{
			title: 'Currículo',
			icon: <FaAddressCard />,
			link: 'https://drive.google.com/file/d/1bSyAptVcIs3OjDLy9P7JLbH1bFlbf-Nf/view?usp=sharing',
		},
	]
	return (
		<ul className="flex gap-2">
			{socialLinks.map((item) => (
				<li
					key={item.title}
					title={item.title}
					className="text-blush-pink text-2xl lg:text-4xl"
				>
					<a href={item.link} target="_blank">
						{item.icon}
					</a>
				</li>
			))}
		</ul>
	)
}

export default SocialMediaLinks
