const principles = [
	"Lawfulness",
	"Fairness",
	"Transparency",
	"Purpose Limitation",
	"Data Minimization",
	"Accuracy",
	"Storage Limitation",
	"Integrity & Confidentiality",
	"Accountability",
	"Privacy by Design",
	"Data Subject Rights",
	"DPIA",
];

const cellValues = [
	{
		criterion: "Data concerning vulnerable data subjects",
		values:
			"Legal basis + parental consent¹,	Avoid coercion or exploitation of vulnerable users²,	Age-appropriate explanations required³,	Strict limitation to research purpose⁴,	Minimize data from vulnerable users⁵,	Ensure correctness of age/classification data,	Shorter retention for minors/vulnerable groups,	Enhanced protection controls,	Document, consent & safeguards,	Child-safe design by default⁶ ⁷ ⁸ ⁹ ¹⁰,	Stronger access/erasure rights¹¹,	Usually required¹²".split(
				",",
			),
	},
	{
		criterion: "Sensitive or special categories of personal data",
		values:
			"Generally prohibited unless explicit consent or lawful exception applies,	Avoid intrusive or exploitative processing,	Clearly disclose sensitive data use,	Limit to explicit research objective,	Strict minimization of sensitive attributes,	Ensure biometric/health data validity,	Short retention + secure deletion,	Strong encryption + access control,	Document legal justification,	Privacy-by-design safeguards,	Full rights enforcement,	Mandatory.".split(
				",",
			),
	},
	{
		criterion: "Significant impact on individuals (service restriction)",
		values:
			"Must have lawful basis for restriction,	Ensure non-discriminatory outcomes,	Explain consequences clearly,	Restrict use to defined purpose,	Avoid excessive data collection for restriction,	Ensure correctness of restriction logic,	Limit retention of restriction logs,	Secure decision records,	Document restriction logic,	Fairness-aware system design,	Right to contest decisions,	Required if high impact".split(
				",",
			),
	},
	{
		criterion: "Large-scale data processing",
		values:
			"Valid legal basis proportional to scale,	Ensure proportionality and fairness,	Explain scope and scale,	Clearly define processing purpose,	Avoid unnecessary aggregation,	Ensure consistency across datasets,	Structured retention schedule,	Secure distributed systems,	Document architecture,	Privacy-aware system design,	Enable scalable access requests,	Usually required".split(
				",",
			),
	},
	{
		criterion: "Use of innovative technology",
		values:
			"Legal basis established before deployment,	Avoid hidden manipulation or bias,	Clearly explain technology use,	Limit use to research necessity,	Collect only necessary sensor data,	Ensure sensor data validity/calibration,	Avoid long-term raw data storage,	Secure sensor/telemetry pipelines,	Document design decisions,	Privacy-by-design embedded,	Sensor control rights,	Required due to novelty".split(
				",",
			),
	},
	{
		criterion: "Automated decision-making and profiling",
		values:
			"Must meet Art. 22 conditions,	Ensure non-discriminatory outcomes,	Explain decision logic,	Limit to defined decision scope,	Avoid irrelevant predictive features,	Ensure input data quality and correctness,	Limit retention of decision outputs,	Secure decision pipelines,	Document algorithm logic,	Human-in-the-loop safeguards,	Right to contest decisions,	Mandatory if significant effects".split(
				",",
			),
	},
	{
		criterion: "Systematic monitoring",
		values:
			"Legal basis for continuous monitoring,	Avoid surveillance imbalance,	Inform users about monitoring,	Restrict monitoring purpose,	Collect only necessary telemetry,	Ensure accuracy of tracking signals,	Strict log retention limits,	Encrypt monitoring data,	Document monitoring process,	Privacy-by-default monitoring,	Opt-out mechanisms,	Often required".split(
				",",
			),
	},
	{
		criterion: "Evaluation, scoring, profiling and predicting",
		values:
			"Legal basis required for scoring,	Avoid biased or harmful scoring systems,	Explain scoring mechanism,	Use scores only for stated purpose,	Collect only necessary indicators,	Ensure scoring model validity,	Remove raw logs after processing,	Protect scoring datasets,	Document scoring model,	Pseudonymisation of users,	Access to scores/results,	Required if profiling".split(
				",",
			),
	},
	{
		criterion: "Matching or combining datasets",
		values:
			"	Legal basis required for linkage,	Avoid unfair inference from combined data,	Inform users about data linkage,	Strict purpose limitation for merging,	Minimize identifiers used for linkage,	Ensure correctness of dataset matching,	Remove intermediate datasets,	Secure data exchange channels,	Document linkage logic,	Separation of identifiers,	Inform users about linkage,	Required if high re-ID risk".split(
				",",
			),
	},
];

export default function PrinciplesGrid() {
	return (
		<div>
			<section className="principles-section">
				<h2>WP29 Criteria vs GDPR Principles</h2>
				<div className="table-wrap">
					<table className="principles-table">
						<thead>
							<tr>
								<th className="diagonal-header">
									<div className="wp29">WP29 Criteria</div>
									<div className="gdpr">
										GDPR <br />
										Principles
									</div>
								</th>
								{principles.map((principle) => (
									<th key={principle}>{principle}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{cellValues.map(({ criterion, values }) => (
								<tr key={criterion}>
									<th className="row-label">{criterion}</th>
									{values.map((value, index) => (
										<td key={`${criterion}-${principles[index]}`}>
											{value || ""}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p>
					In case of processing children's personal data: <br />
					1. Children under 16 (or lower if a Member State sets) require
					parental consent for online services processing personal data (Art.
					8). Controllers must make “reasonable efforts” to verify parental
					consent. <br />
					2.Design and develop your online service with the best interests of
					the child in mind. This means taking into account their age, keeping
					them safe from exploitation risks and protecting and supporting their
					health, wellbeing, physical and psychological development. Your use of
					their personal data shouldn’t affect any of these factors. Do not use
					children’s personal data in ways that are detrimental to their
					wellbeing or that go against industry codes of practice <br />
					3.Ensure your privacy information is concise, prominent and written in
					clear language that a child could understand. Provide additional
					explanations at points where you use their personal data. <br />
					4. Do not share children’s data unless necessary for reaching the
					defined and disclosed purposes, taking into account the best interests
					of the child. <br />
					5. Collect and retain the minimum amount of personal data required to
					run your service. If possible, give children separate choices over
					which elements they wish to activate. <br />
					6. If applicable, switch profiling options to ‘off’ by default, unless
					you have a compelling reason not to. Only allow profiling if you have
					measures in place to protect children from any harmful effects, e.g.,
					being fed content detrimental to their health or wellbeing. <br />
					7. Set all privacy settings to ‘high’ by default, unless you can
					demonstrate a reason not to.
					<br />
					8.If applicable, switch geolocation settings to ‘off’ by default
					unless you have a compelling reason not to. Make it obvious when
					location tracking is active. Default location tracking to ‘off’ at the
					end of a session. <br />
					9.If applicable, take a risk-based approach to recognising the age of
					your users – either establish age through verification, or apply the
					standards to all users.
					<br />
					10. Do not use nudge techniques to encourage children to provide
					unnecessary personal data or to turn off their privacy protections.
					<br />
					11. Provide prominent and accessible tools to help children exercise
					their data protection rights and report concerns. <br />
					12. Undertake a DPIA to assess and mitigate any risks to the rights
					and freedoms of children that arise from your processing of their
					data. Children deserve specific protection because they may be less
					aware of risks. This applies especially to marketing, profiling, and
					data collection(Recital 38).
				</p>
			</section>
		</div>
	);
}
