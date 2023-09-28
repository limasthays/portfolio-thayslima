import clsx from 'clsx'

type SectionTitleProps = { title: string; whiteVariant?: boolean }

function SectionTitle({ title, whiteVariant }: SectionTitleProps) {
	return (
		<div
			className={clsx(
				`flex gap-2 md:gap-4 items-center sticky top-0 w-full py-4 px-4 md:px-6 z-40 backdrop-blur ${
					whiteVariant ? 'bg-off-white/50' : 'bg-deep-violet/50'
				}`
			)}
		>
			<h2
				className={clsx(
					`uppercase font-bold text-lg md:text-xl min-w-fit ${
						whiteVariant ? 'text-main-violet' : 'text-off-white'
					}`
				)}
			>
				{title}
			</h2>
			<hr
				className={clsx(
					`w-full border-[1px] ${
						whiteVariant ? 'border-main-violet' : 'border-off-white'
					}`
				)}
			/>
		</div>
	)
}

export default SectionTitle
