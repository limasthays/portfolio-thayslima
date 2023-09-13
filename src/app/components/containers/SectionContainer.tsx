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
			<SectionTitle title={sectionTitle} whiteVariant={whiteVariant} />
			<section
				className={clsx(
					`min-h-screen px-6 pt-2 pb-6 w-full ${
						whiteVariant && 'bg-off-white text-deep-blue'
					}`
				)}
				id={id}
			>
				{children}
			</section>
		</>
	)
}

export default SectionContainer
