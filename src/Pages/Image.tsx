import styled from "styled-components";


interface IMage {
img?: any
}
const Image: React.FC<IMage> = ({img}) => {
    return(
        <div>
            <Container src={img}/>
        </div>
    )
}

export default Image;

const Container = styled.img`
width: 250px;
height: 370px;
background-color: gray;
display: flex;
object-fit: cover;
margin-right: 25px;
border-radius: 10px;
border: 1px solid silver;
`