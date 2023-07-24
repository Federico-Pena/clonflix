function Button({ onClicked, text, className, icon }) {
	return (
		<button className={className} onClick={onClicked && onClicked}>
			{icon && icon}
			{text}
		</button>
	)
}

export default Button
