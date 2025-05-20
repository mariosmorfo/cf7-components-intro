
// interface Props {
//     title: string;
//     description: string;
// }

type A = {
    title: string;
}

type B = {
   description: string;
}

type Props = A & B;





const ArrowFunctionalComponentsWithProps = ({title, description}: Props) => {
    return (
        <>

            <h1 className="text-center mt-12 font-bold">{title}</h1>
            <p className="text-center">{description}</p>


        </>
    )
}

export default ArrowFunctionalComponentsWithProps;