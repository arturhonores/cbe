import { target } from "./Data"

const Target = () => {

    const [card1, card2, card3] = target
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-indigo-950 text-white p-14">
                <h3 className="text-[42px] font-medium">{card1.title}</h3>
                <p>{card1.text} </p>
                <ul className="leading-7 pt-4">
                    {
                        card1.problems.map((problem, index) => <li key={index}>- {problem}</li>)
                    }
                </ul>
            </div>
            <div className="bg-cyan-500 text-white p-14">
                <h3 className="text-[42px] font-medium">{card2.title}</h3>
                <p>{card2.text} </p>
                <ul className="leading-7 pt-4">
                    {
                        card2.problems.map((problem, index) => <li key={index}>- {problem}</li>)
                    }
                </ul>
            </div>
            <div className="bg-white text-slate-600 p-14">
                <h3 className="text-[42px] font-medium">{card3.title}</h3>
                <p>{card3.text} </p>
                <ul className="leading-7 pt-4">
                    {
                        card3.problems.map((problem, index) => <li key={index}>- {problem}</li>)
                    }
                </ul>
            </div>
        </section>
    )
}
export default Target