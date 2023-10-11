import clsx from 'clsx'
import { FaLinkedin, FaGithub, FaAddressCard } from 'react-icons/fa'

type SocialMediaLinksProps = {
	className?: string
	size: 'normal' | 'small'
}

function SocialMediaLinks({ className, size }: SocialMediaLinksProps) {
	const socialLinks = [
		{
			title: 'LinkedIn',
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/limasthays/',
		},
		{
			title: 'Github',
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
		<ul className={clsx('flex gap-2', className ?? '')}>
			{socialLinks.map((item) => (
				<li
					key={item.title}
					title={item.title}
					className={clsx(
						'text-blush-violet hover:scale-125 active:scale-125',
						{
							'text-3xl lg:text-4xl': size === 'normal',
							'text-2xl': size === 'small',
						}
					)}
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
