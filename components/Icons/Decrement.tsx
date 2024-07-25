interface IconProps extends React.HTMLAttributes<SVGElement> {}

const Decrement = ({ className, ...props }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="2"
			fill="none"
			viewBox="0 0 10 2"
			className={className}
			{...props}
		>
			<path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
		</svg>
	)
}

export default Decrement
