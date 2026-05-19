import GeneralRequirements from "./GeneralRequirements";

export default function GeneralRequirementsPanel() {
	const categories = GeneralRequirements.getCategories();

	return (
		<section className="table-section">
			<h2>General Requirements</h2>
			<div className="table-wrap">
				<table className="requirements-table">
					<thead>
						<tr>
							<th>Category</th>
							<th>Action points</th>
						</tr>
					</thead>
					<tbody>
						{categories.map((category) =>
							category.actionPoints.map((actionPoint, index) => (
								<tr key={`${category.name}-${index}`}>
									{index === 0 ? (
										<td
											rowSpan={category.actionPoints.length}
											className="category-cell"
										>
											{category.name}
										</td>
									) : null}
									<td style={{ textAlign: "left" }}>{actionPoint}</td>
								</tr>
							)),
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}
