const SectionList = ({ children, title }) => {
	return (
		<section className="main-section">
			<div>
				<h2>{title}</h2>
			</div>
			{children}
		</section>
	);
};

export default SectionList;
