// src/components/PriceSection.tsx
import ProgramAccordion from './ProgramAccordion'

export default function PriceSection() {
  return (
    <>
      <h2 className="section-title">Домашний Праздник</h2>
      <ProgramAccordion type="home" subtitle="С Дедом Морозом и Снегурочкой" />

      <h2 className="section-title">
        Для классов и <br />
        детских садов
      </h2>
      <ProgramAccordion type="class" subtitle="Дедушка Мороз и Снегурочка" />

      <h2 className="section-title">На улице</h2>
      <ProgramAccordion type="yard" subtitle="Дедушка Мороз со Снегурочкой" />
    </>
  )
}
