type SkillCardProps = {
	title: string
	icon: React.ReactNode
}

function SkillCard({ icon, title }: SkillCardProps) {
	return (
		<figure className="h-[84px] w-[84px] flex flex-col gap-1 items-center justify-center border border-off-white rounded">
			<div className="text-4xl">{icon}</div>
			<span className="text-xs text-off-white text-center font-semibold">
				{title}
			</span>
		</figure>
	)
}

export default SkillCard
