import { ContainerGrid } from "./container.component";
import { TitleSection } from "./title-section.component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const questions = [
  {
    question: "O que são NFTs",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error excepturi, itaque ipsum libero laboriosam ipsa est hic quas voluptates odit maxime deleniti quasi. Perferendis, quasi. Mollitia magni obcaecati consectetur.",
  },
  {
    question: "Como funciona a compra de NFTs em seu site?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error excepturi, itaque ipsum libero laboriosam ipsa est hic quas voluptates odit maxime deleniti quasi. Perferendis, quasi. Mollitia magni obcaecati consectetur.",
  },
  {
    question: "Como posso vender meus próprios NFTs?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error excepturi, itaque ipsum libero laboriosam ipsa est hic quas voluptates odit maxime deleniti quasi. Perferendis, quasi. Mollitia magni obcaecati consectetur.",
  },
  {
    question: "Os NFTs são seguros e autênticos?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error excepturi, itaque ipsum libero laboriosam ipsa est hic quas voluptates odit maxime deleniti quasi. Perferendis, quasi. Mollitia magni obcaecati consectetur.",
  },
  {
    question:
      "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
    response:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error excepturi, itaque ipsum libero laboriosam ipsa est hic quas voluptates odit maxime deleniti quasi. Perferendis, quasi. Mollitia magni obcaecati consectetur.",
  },
];

export function SectionQuestions() {
  return (
    <section>
      <ContainerGrid>
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />

        <div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map(({ question, response }, index) => (
              <AccordionItem key={index} value={`question-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{response}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContainerGrid>
    </section>
  );
}
