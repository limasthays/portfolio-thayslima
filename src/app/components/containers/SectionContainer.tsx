import clsx from 'clsx'
import SectionTitle from '../headings/SectionTitle'

type SectionContainerProps = {
	children: React.ReactNode
	id: string
	sectionTitle: string
	whiteVariant?: boolean
}

function SectionContainer({
	children,
	id,
	sectionTitle,
	whiteVariant,
}: SectionContainerProps) {
	return (
		<>
			<section
				className={clsx(
					`min-h-screen px-5 md:px-6 pb-10 w-full ${
						whiteVariant && 'bg-off-white text-deep-blue'
					}`
				)}
				id={id}
			>
				<SectionTitle title={sectionTitle} whiteVariant={whiteVariant} />
				{children}
			</section>
		</>
	)
}

export default SectionContainer
