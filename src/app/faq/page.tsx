import { ReactNode } from 'react';

interface QuestionProps {
    title: string;
    children: ReactNode;
}

const Question = ({ title, children }: QuestionProps) => (
    <div className="space-y-6">
        <h2 className="text-2xl">{title}</h2>
        <p>{children}</p>
    </div>
);

export default function FAQs() {
    return (
        <div className="max-w-[874px] mx-auto">
            <main className="container mx-auto mt-8 p-4" id="FAQs">
                <h1 className="text-4xl font-semibold mb-4 text-center">FAQs</h1>
                <div className={`mb-4 text-justify`}>
                    <div className="space-y-12">
                        <Question title="What is game theory?">
                            Game theory is the study of mathematical models of strategic interaction among rational decision-makers. It has applications in various fields, including economics, political science, psychology, and computer science.
                        </Question>
                        <Question title="How is game theory used in economics?">
                            In economics, game theory is used to model the behavior of individuals and firms in situations where their decisions affect each other. It helps in understanding competitive behaviors, market strategies, and the outcomes of different economic scenarios.
                        </Question>
                        <Question title="What are some common concepts in game theory?">
                            Some common concepts in game theory include Nash equilibrium, dominant strategies, Pareto efficiency, and zero-sum games. These concepts help in analyzing and predicting the outcomes of strategic interactions.
                        </Question>
                        <Question title="Can game theory be applied to real-life situations?">
                            Yes, game theory can be applied to various real-life situations, such as business negotiations, political campaigns, and social interactions. It provides a framework for understanding and predicting the behavior of individuals and groups in strategic settings.
                        </Question>
                    </div>
                </div>
            </main>
        </div>
    );
}