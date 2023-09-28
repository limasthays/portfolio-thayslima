import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import TriangleOpen from '../../assets/icons/triangle-open.svg'
import TriangleClose from '../../assets/icons/triangle-close.svg'
import { useState } from 'react'

type LinkProps = {
	title: string
	link: string
}

type ProjectCardProps = {
	img: string | StaticImport
	projectTags: string
	title: string
	techs: string
	links: LinkProps[]
	about: string
}

function ProjectCard({
	img,
	projectTags,
	title,
	techs,
	links,
	about,
}: ProjectCardProps) {
	const [isTextVisible, setIsTextVisible] = useState<boolean>(false)

	return (
		<div className="flex flex-col md:flex-row items-center md:items-start md:gap-4 md:border md:border-deep-blue md:rounded md:p-4 md:max-w-[800px] md:mx-auto">
			<Image
				src={img}
				alt="project mockup"
				className="w-full max-w-xs md:max-w-md"
			/>

			<div className="flex flex-col gap-2">
				<div className="text-center md:text-left">
					<p className="font-light text-xs md:text-sm">{projectTags}</p>
					<h3 className="uppercase font-bold md:text-xl">{title}</h3>
					<p className="font-light text-sm md:text-[15px]">{techs}</p>
				</div>

				<div className="flex gap-2">
					{links.map((item) => (
						<button
							title={item.title}
							key={item.title}
							className="border border-deep-blue rounded px-2 py-1 font-bold text-xs md:text-sm md:px-4"
						>
							<a href={item.link} target="_blank">
								{item.title}
							</a>
						</button>
					))}

					<button
						onClick={() => {
							setIsTextVisible(!isTextVisible)
						}}
						className="flex items-center border border-deep-blue px-2 py-1 font-bold text-xs md:hidden"
					>
						sobre o app
						<Image
							src={isTextVisible ? TriangleClose : TriangleOpen}
							alt="triangle button icon"
							className="h-2 ml-1"
						/>
					</button>
				</div>
				<p className="text-sm hidden md:block md:mt-2">{about}</p>
			</div>

			{isTextVisible && <p className="text-sm">{about}</p>}
		</div>
	)
}

export default ProjectCard
