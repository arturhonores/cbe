import individualTherapy from "./assets/images/therapy-individual.jpg"
import coupleTherapy from "./assets/images/couple-therapy.jpg"
import familyTherapy from "./assets/images/familiar-therapy.jpg"

export const target = [
    {
        id: 1,
        title: "Adultos",
        text: "Los adultos experimentan un sinnúmero de dificultades en cada una de las etapas de su vida.Desde la adultez temprana y hasta la vejez pueden surgir situaciones a nivel familiar, laboral, socioeconómico que requieran de algún tipo de asesoría para su mejor manejo y asi evitar o disminuir la probabilidad del desarrollo de síntomas clínicos.",
        problems: ["ANSIEDAD", "DEPRESIÓN", "DIFICULTADES EN PROCESO DE AJUSTE A CAMBIOS", "ESTRÉS LABORAL", "PATERNIDAD/MATERNIDAD"]
    },
    {
        id: 2,
        title: "Niños",
        text: "Los niños y jóvenes enfrentan muchas dificultades tanto a nivel social, académico y familiar. En la niñez se dan los procesos de aprendizaje para regular emociones y varios factores influyen al respecto. Involucrar a los adultos cuidadores en el proceso terapéutico es esencial para lograr mejores resultados.",
        problems: ["PROBLEMAS DE ATENCIÒN", "HIPERACTIVIDAD-IMPULSIVIDAD", "CONDUCTA O POSICIONAL", "DIFICULTAD PARA AJUSTARSE A LOS CAMBIOS", "MIEDOS PERSISTENTES", "INSEGURIDAD", "DIFICULTADES EN EL PROCESO DE APRENDIZAJE"]
    },
    {
        id: 3,
        title: "Parejas",
        text: "Terapia dirigida a mejorar los estilos de comunicación en la pareja para facilitar la resolución de conflictos y desarrollar destrezas para lograr una relación saludable en la que puedan crecer y realizarse como individuos y como pareja.",
        problems: ["FAMILIAS RECONSTRUIDAS", "CONFLICTOS EN ROLES PARENTALES", "DIFICULTADES EN LA COMUNICACIÓN", "INFIDELIDAD", "SEXUALIDAD"]
    },

]

export const services = [
    {
        id: 1,
        imageSrc: individualTherapy,
        title: "Terapia Individual"
    },
    {
        id: 2,
        imageSrc: coupleTherapy,
        title: "Terapia de Pareja"
    },
    {
        id: 3,
        imageSrc: familyTherapy,
        title: "Terapia de Familia"
    }
]