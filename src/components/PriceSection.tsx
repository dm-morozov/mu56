// src/components/PriceSection.tsx
import ProgramAccordion from './ProgramAccordion'

export default function PriceSection() {
  return (
    <>
      <h2 className="section-title">Домашний Праздник</h2>
      <ProgramAccordion type="home" subtitle="С Дедом Морозом и Снегурочкой" />

      <h2 className="section-title">Для классов</h2>
      <ProgramAccordion type="class" subtitle="Для классов и детских садов" />

      <h2 className="section-title">Во дворе</h2>
      <ProgramAccordion type="yard" subtitle="На свежем воздухе" />
    </>
  )
}
