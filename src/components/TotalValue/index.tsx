import { CarsFinalValue } from "@/@types/cars";
import { CardTitle, Container, Description, TotalValue } from "./styles";

export function TotalValueComponent({ AnoModelo, Modelo, Valor }: CarsFinalValue){
    return (
        <Container>
            <CardTitle>
                Tabela Fipe: Preço {Modelo} {AnoModelo}
            </CardTitle>
            <TotalValue>
                {Valor}
            </TotalValue>
            <Description>
                Este é o preço de compra do veículo
            </Description>
        </Container>
    )
}