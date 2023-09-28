import { useState } from 'react'

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
			onClick={() => {
				handleCopyEmail()
			}}
		>
			<p className="text-sm font-bold cursor-pointer">limasthays@gmail.com</p>
			<span className="text-xs">
				{emailCopied ? 'email copiado!' : 'clique para copiar'}
			</span>
		</div>
	)
}

export default CopyMyEmail
