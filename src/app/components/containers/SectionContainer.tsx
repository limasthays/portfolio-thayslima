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
			className={clsx('min-h-screen', {
				'bg-off-white text-main-violet': whiteVariant,
			})}
		>
			<SectionTitle title={sectionTitle} whiteVariant={whiteVariant} />
			<div className="px-5 md:px-6 pt-6 pb-10 w-full flex items-center justify-center">
				{children}
			</div>
		</section>
	)
}

export default SectionContainer
