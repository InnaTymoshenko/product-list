interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text?: string
}

const Button = ({ className, text, children, ...props }: ButtonProps) => {
	return (
		<button className={className} {...props}>
			{children}
			{text}
		</button>
	)
}

export default Button
