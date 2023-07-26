function Button({ onClicked, text, className, icon, title }) {
	return (
		<button
			title={title}
			className={className}
			onClick={onClicked && onClicked}>
			{icon && icon}
			{text}
		</button>
	)
}

export default Button
