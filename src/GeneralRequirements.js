class GeneralRequirements {
	static categories = [
		{
			name: "Data Subjects Rights",
			actionPoints: [
				"1. Ensure mechanisms are in place to facilitate access to personal data.",
				"2. Ensure procedures are in place to enable rectification of inaccurate or incomplete data.",
				"3. Ensure procedures are in place to enable erasure of personal data where applicable.",
				"4. Ensure procedures are in place to restrict processing upon valid request.",
				"5. Ensure procedures are in place to support data portability requests.",
				"6. Ensure procedures are in place to handle objections to processing.",
				"7. Ensure Individuals are informed about and can exercise their rights regarding automated decision-making and profiling.",
				"8. Ensure where automated decision-making that produces legal or similarly significant effects is based on consent, explicit consent has been collected from the individual.",
				"9. Ensure where automated decision-making is used (necessary for a contract or based on explicit consent), procedures are in place to allow individuals to request human intervention and to contest the decision.",
			],
		},
		{
			name: "Lawfulness & Fairness",
			actionPoints: [
				"1. Ensure all personal data processing has a valid lawful basis under GDPR including consent.",
				"2. Ensure personal data is processed fairly and transparently.",
				"3. Ensure processing is limited to specified, explicit, and legitimate purposes (purpose limitation).",
				"4. Ensure only personal data necessary for the stated purposes is collected (data minimisation).",
				"5. Ensure personal data is accurate and kept up to date where necessary.",
				"6. Ensure personal data is not retained longer than necessary (storage limitation).",
				"7. Ensure appropriate security measures are applied to protect personal data integrity and confidentiality.",
			],
		},
		{
			name: "Transparency & Communication",
			actionPoints: [
				"1. Provide clear, accessible information to data subjects regarding data processing activities.",
				"2. Ensure individuals are informed about purposes, legal basis, and data usage.",
				"3. Ensure transparency across all stages of personal data processing.",
			],
		},
		{
			name: "Governance & Accountability",
			actionPoints: [
				"1. Implement appropriate technical and organisational measures to ensure GDPR compliance.",
				"2. Apply data protection by design and by default in all processing activities.",
				"3. Maintain records of processing activities (RoPA).",
				"4. Conduct Data Protection Impact Assessments (DPIAs) where required.",
				"5. Ensure accountability and the ability to demonstrate compliance at all times.",
			],
		},
		{
			name: "Third-Party & Processing Control",
			actionPoints: [
				"1. Ensure all processors are bound by appropriate data processing agreements (DPAs).",
				"2. Ensure subprocessors are properly authorised and controlled.",
				"3. Ensure compliance is maintained across all third-party data processing activities.",
			],
		},
		{
			name: "Security & Incident Management",
			actionPoints: [
				"1. Implement appropriate technical and organisational security measures.",
				"2. Use encryption, pseudonymisation, and access controls where suitable.",
				"3. Review and test security controls regularly.",
				"4. Ensure data breaches are detected, assessed, and reported where required within legal timeframes.",
				"5. Ensure affected individuals are informed of high-risk data breaches when applicable.",
			],
		},
		{
			name: "International Data Transfers",
			actionPoints: [
				"1. Map cross-border transfer flows and identify transfer destinations.",
				"2. Apply appropriate safeguards such as adequacy decisions, SCCs, or binding corporate rules.",
				"3. Notify affected data subjects when transfers extend beyond the EEA.",
				"4. Monitor changes to transfer rules and update safeguards accordingly.",
			],
		},
		{
			name: "DPIA (risk assessment)",
			actionPoints: [
				"1. Assess whether the processing is likely to result in high risk to individuals’ rights and freedoms.",
				"2. Document the necessity and proportionality of the proposed processing.",
				"3. Identify risks, safeguards, and residual risk mitigation measures.",
				"4. Review the DPIA before launch and update it when processing changes.",
			],
		},
	];

	static getCategories() {
		return this.categories;
	}
}

export default GeneralRequirements;
