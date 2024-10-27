import { Section } from "@/components/Section";

export default function FAQ() {
    return (
        <div className="max-w-[874px] mx-auto">
            <Section title="FAQs">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">What is game theory?</h3>
                        <p>Game theory is the study of mathematical models of strategic interaction among rational decision-makers. It has applications in various fields, including economics, political science, psychology, and computer science.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">How is game theory used in economics?</h3>
                        <p>In economics, game theory is used to model the behavior of individuals and firms in situations where their decisions affect each other. It helps in understanding competitive behaviors, market strategies, and the outcomes of different economic scenarios.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">What are some common concepts in game theory?</h3>
                        <p>Some common concepts in game theory include Nash equilibrium, dominant strategies, Pareto efficiency, and zero-sum games. These concepts help in analyzing and predicting the outcomes of strategic interactions.</p></div>
                    <div>
                        <h3 className="text-lg font-semibold">Can game theory be applied to real-life situations?</h3>
                        <p>Yes, game theory can be applied to various real-life situations, such as business negotiations, political campaigns, and social interactions. It provides a framework for understanding and predicting the behavior of individuals and groups in strategic settings.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}