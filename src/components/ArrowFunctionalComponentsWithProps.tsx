type Props = {
    title: string;
}


const ArrowFunctionalComponentsWithProps = ({title}: Props) => {
    return <h1 className="text-center mt-12 font-bold">{title}</h1>
}

export default ArrowFunctionalComponentsWithProps;