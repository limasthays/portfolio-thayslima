function SectionTitle({ title }: { title: string }) {
	return (
		<div className="flex gap-2 items-center sticky top-0 py-6">
			<h2 className="uppercase font-bold text-xl min-w-fit">{title}</h2>
			<hr className="w-full border-[1px] border-deep-blue" />
		</div>
	)
}

export default SectionTitle
