const categories = [
	{
		name: "1. Data concerning vulnerable data subjects",
		questions: [
			"Do you collect data from any children during the validation scenario?",
			"Do you collect data from any other vulnerable participants (e.g., patients, elderly users, or cognitively impaired individuals) during the validation scenario?",
			"Considering the objective of the serious game validation (e.g., learning assessment, behavioural evaluation, or performance analysis), is there any potential power imbalance between the researcher/game controller and the participants (such as the power imbalance between students and teachers or employees and employers)?",
			"Are participants in the serious game validation context able to easily provide informed consent, refuse participation, or exercise their GDPR rights without pressure or disadvantage (e.g., children in school-based game studies)?",
			"Does the serious game validation involve participant groups that may require enhanced protection due to their condition or context (e.g., minors, clinical patients, elderly users, asylum seekers, or individuals with cognitive or mental health conditions)?",
		],
	},
	{
		name: "2. Sensitive or special categories of personal data",
		questions: [
			"Does the processing activity in this validation step involve any special categories of personal data under GDPR Article 9 (e.g., health-related indicators, biometric signals such as eye-tracking or facial expression data, or data revealing racial/ethnic origin, political opinions, or religious beliefs)?",
			"Does the processing activity in this validation step include personal data related to criminal convictions or offences?",
			"Does the processing involve other types of personal data that may be considered highly sensitive such as electronic communications, location tracking, financial information, or similarly intrusive data types that may significantly affect individuals’ rights, freedoms, privacy, or autonomy?",
			"Does the processing include behavioural or profiling data generated during gameplay, such as interaction logs, decision patterns, performance metrics, reaction times, or sensor-based signals (e.g., eye-tracking or physiological data)?",
		],
	},
	{
		name: "3. Significant impact on individuals (service restriction)",
		questions: [
			"Does the processing of data in the serious game validation affect individuals’ legal rights (e.g., access to services, educational assessment, or participation eligibility)?",
			"Does the processing affect individuals’ legal status in any way (e.g., classification, certification, or eligibility outcomes)?",
			"Does the processing have any impact on individuals’ contractual rights or obligations (e.g., participation agreements, educational evaluation frameworks, or training outcomes)?",
			"Does the processing potentially have any similarly significant effects on individuals (e.g., psychological impact, behavioural profiling, or performance-based categorisation)?",
		],
	},
	{
		name: "4. Large-scale data processing",
		questions: [
			"Is the serious game validation process expected to involve a large number of participants (e.g., players or test subjects)?",
			"Is a large volume of personal data collected during the serious game validation (e.g., gameplay logs, sensor data, survey responses)?",
			"Are multiple distinct categories or types of personal data processed during the serious game validation (e.g., behavioural data, biometric signals, demographic information)?",
			"Does the serious game validation process have a wide geographical scope (e.g., multi-country or global online participation)?",
			"Is data processing performed frequently or continuously during the serious game validation (e.g., real-time or ongoing tracking during gameplay)?",
			"Does the data processing in the serious game validation extend over a long duration (e.g., longitudinal or repeated gameplay over time)?",
		],
	},
	{
		name: "5. Use of Innovative technology",
		questions: [
			"Does the serious game validation use any innovative, novel, or emerging technologies or organisational approaches (e.g., VR environments, eye-tracking systems, adaptive game engines, or AI-based analytics)?",
		],
	},
	{
		name: "6. Automated decision-making and profiling",
		questions: [
			"Is personal data processed during the serious game validation used to support or generate decisions about participants (e.g., performance evaluation, learning outcomes, behavioural classification)?",
			"Does the validation process involve any level of automation in data processing or analysis (e.g., automatic scoring, behavioural analysis, or adaptive difficulty adjustment)?",
			"Is there any human involvement in the interpretation or processing of data generated during the serious game validation?",
			"If human involvement exists, does the responsible researcher or operator have the authority or capability to modify, override, or influence the automatically generated results or outputs?",
		],
	},
	{
		name: "7. Systematic monitoring",
		questions: [
			"Does the processing activity include observing, tracking, or monitoring participants’ behaviour through online or digital environments (e.g., online serious games, web-based experiments, or remote gameplay sessions)?",
			"Does the validation process involve tracking or monitoring individuals in publicly accessible or shared environments where the serious game is deployed (e.g., public installations, classrooms, or open-access digital platforms)",
		],
	},
	{
		name: "8. Evaluation, scoring, profiling and predicting",
		questions: [
			"Does the serious game validation involve any form of evaluation, scoring, profiling, or prediction based on participants’ data or in-game behaviour, including but not limited to:",
			"Performance at work or task execution, Economic situation, Health status or indicators (e.g, cognitive assessment),Personal preferences, Interests, Reliability or trustworthiness, Behavioural patterns (e.g, behavioural classification), Location or movement tracking.",
		],
	},
	{
		name: "9. Matching or combining datasets",
		questions: [
			"Does the serious game validation involve combining data generated from two or more distinct processing operations (e.g., gameplay telemetry, surveys, or sensor data) that are collected for different purposes or by different controllers, in a way that may go beyond participants’ reasonable expectations?",
		],
	},
];

export default function QuestionTable() {
	return (
		<section className="table-section">
			<h2>Questions to Identify High-risk Processing Activities</h2>
			<div className="table-wrap">
				<table className="question-table">
					<thead>
						<tr>
							<th>Category</th>
							<th>Questions</th>
						</tr>
					</thead>
					<tbody>
						{categories.map((category) =>
							category.questions.map((question, index) => (
								<tr key={`${category.name}-${index}`}>
									{index === 0 ? (
										<td
											rowSpan={category.questions.length}
											className="category-cell"
										>
											{category.name}
										</td>
									) : null}
									<td className="question-cell">{question}</td>
								</tr>
							)),
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}
