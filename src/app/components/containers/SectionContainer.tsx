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
		<section
			id={id}
			className={clsx({
				'bg-off-white text-deep-blue': whiteVariant,
			})}
		>
			<SectionTitle title={sectionTitle} whiteVariant={whiteVariant} />
			<div className="min-h-screen px-5 md:px-6 pt-6 pb-10 w-full flex items-center justify-center">
				{children}
			</div>
		</section>
	)
}

export default SectionContainer
