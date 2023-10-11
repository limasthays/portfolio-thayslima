import clsx from 'clsx'
import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

function CopyMyEmail() {
	const [emailCopied, setEmailCopied] = useState(false)

	const handleCopyEmail = () => {
		navigator.clipboard.writeText('limasthays@gmail.com')
		setEmailCopied(true)

		setTimeout(() => {
			setEmailCopied(false)
		}, 5000)
	}

	return (
		<div
			className={clsx(
				'flex items-center gap-4 border border-blush-violet rounded px-3 md:px-4 py-2 cursor-pointer',
				{
					'bg-off-white/20': emailCopied,
				}
			)}
			onClick={() => {
				handleCopyEmail()
			}}
		>
			<span className="text-blush-violet">
				<FaEnvelope />
			</span>
			<div>
				<p className="text-blush-violet font-bold md:text-lg">
					Me manda uma mensagem?
				</p>
				<p className="text-sm font-bold">limasthays@gmail.com</p>

				<span className="text-xs">
					{emailCopied ? 'email copiado!' : 'clique para copiar'}
				</span>
			</div>
		</div>
	)
}

export default CopyMyEmail
