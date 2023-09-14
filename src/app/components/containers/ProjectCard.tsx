'use client'

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
		<div className="flex flex-col md:flex-row items-center md:items-start">
			<Image
				src={img}
				alt="project mockup"
				className="w-full max-w-xs md:max-w-md mb-2"
			/>

			<div>
				<div className="text-center md:text-left">
					<p className="font-light text-xs">{projectTags}</p>
					<h3 className="uppercase font-bold">{title}</h3>
					<p className="font-light text-sm">{techs}</p>
				</div>

				<div className="flex gap-2 my-2">
					{links.map((item) => (
						<button
							title={item.title}
							key={item.title}
							className="border border-deep-blue px-2 py-1 font-bold text-xs"
						>
							<a href={item.link}>{item.title}</a>
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
				<p className="text-sm my-1 hidden md:block">{about}</p>
			</div>

			{isTextVisible && <p className="text-sm my-1">{about}</p>}
		</div>
	)
}

export default ProjectCard
