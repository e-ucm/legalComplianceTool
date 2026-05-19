import "./App.css";
import QuestionTable from "./QuestionTable";
import PrinciplesGrid from "./PrinciplesGrid";

export default function App() {
	return (
		<main className="app-root">
			<section className="hero-panel">
				<h1 style={{ letterSpacing: "1px" }}>
					A Decision-Support Framework for Compliance in Serious Game Validation
				</h1>
				<p>
					This project proposes a structured framework to support serious game
					developers and researchers in identifying and managing data protection
					requirements during the design and validation of game-based
					experiments. Grounded in the EU General Data Protection Regulation
					(GDPR) and interpretative guidance such as WP29 recommendations, the
					framework translates regulatory concepts into operational,
					context-specific questions tailored to serious game validation
					workflows. By linking experimental design steps with data processing
					activities and potential privacy risks, it supports early
					identification of DPIA-relevant scenarios and encourages
					privacy-by-design thinking from the earliest stages of development.
				</p>
			</section>
			<section>
				<p>
					{" "}
					A key component of the framework is a set of DPIA screening questions
					derived from GDPR and WP29 criteria, aimed at assessing whether a
					processing activity is likely to present high risks to individuals’
					rights and freedoms. The list of DPIA-related questions included in
					the framework is presented below.
				</p>
				<QuestionTable />
			</section>
			<br />
			<section>
				<p>
					{" "}
					The GDPR Principles / WP29 Matrix is a structured mapping tool
					designed to connect core principles of the EU General Data Protection
					Regulation (GDPR) with interpretative criteria derived from WP29
					guidelines. It helps researchers and serious game developers
					understand how high-level legal principles—such as lawfulness,
					fairness, transparency, data minimisation, and
					accountability—translate into practical design and data processing
					considerations. By linking these principles to WP29 risk indicators,
					the matrix supports early identification of privacy risks in serious
					game validation studies. This enables users to better understand which
					regulatory obligations may be triggered under different experimental
					configurations and encourages privacy-by-design thinking throughout
					the research lifecycle.
				</p>
				<p>
					This matrix is the basis for generating the "Compliance Output" of the
					framework.
				</p>
				<PrinciplesGrid />
			</section>
			<div class="footnote">
				This material has been prepared as part of the research work developed
				for the paper entitled “A Decision-Support Framework for Compliance in
				Serious Game Validation”, submitted to the Simposio Internacional de
				Informática Educativa (SIIE 2026).
			</div>
		</main>
	);
}
