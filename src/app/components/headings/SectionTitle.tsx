function SectionTitle({ title }: { title: string }) {
	return (
		<div className="flex gap-2 items-center">
			<h2 className="uppercase font-bold text-xl">{title}</h2>
			<hr className="w-full border-[1px] border-deep-blue" />
		</div>
	)
}

export default SectionTitle
