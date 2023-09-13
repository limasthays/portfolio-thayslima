import clsx from 'clsx'

type SectionTitleProps = { title: string; whiteVariant?: boolean }

function SectionTitle({ title, whiteVariant }: SectionTitleProps) {
	return (
		<div
			className={clsx(
				`flex gap-2 items-center sticky top-0 py-4 ${
					whiteVariant ? 'bg-off-white' : 'bg-deep-blue'
				}`
			)}
		>
			<h2 className="uppercase font-bold text-xl min-w-fit">{title}</h2>
			<hr
				className={clsx(
					`w-full border-[1px] ${
						whiteVariant ? 'border-deep-blue' : 'border-off-white'
					}`
				)}
			/>
		</div>
	)
}

export default SectionTitle
