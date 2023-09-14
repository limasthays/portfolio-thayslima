import clsx from 'clsx'

type SectionTitleProps = { title: string; whiteVariant?: boolean }

function SectionTitle({ title, whiteVariant }: SectionTitleProps) {
	return (
		<div
			className={clsx(
				`flex gap-2 md:gap-4 items-center sticky top-0 w-full py-4 z-40 ${
					whiteVariant ? 'bg-off-white' : 'bg-deep-blue'
				}`
			)}
		>
			<h2
				className={clsx(
					`uppercase font-bold text-lg md:text-xl min-w-fit ${
						whiteVariant ? 'text-deep-blue' : 'text-off-white'
					}`
				)}
			>
				{title}
			</h2>
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
