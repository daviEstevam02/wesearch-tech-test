import { SelectComponent } from "@/components/SelectComponent/SelectComponent";
import { useCars } from "@/hooks/useCars"
import { useEffect } from "react";
import { Container, Content, Header, SubTitle, Title, ButtonSection } from "../styles/home/styles"
import { Controller, useForm } from "../../node_modules/react-hook-form";
import { CarsForm } from "@/@types/cars";
import { TotalValueComponent } from "@/components/TotalValue/index";
import Button from "@/components/Button/index";

export default function Home() {
  const { 
    carsBrandOptions,
    carsModelOptions, 
    carsYearOptions,
    carsValue,
    getBrands, 
    getModels, 
    getYears,
    getTotalValue
  } = useCars();
  const {
    watch,
    control,
    handleSubmit,
    setValue
  } = useForm<CarsForm>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [watchBrandId, watchModelId, watchYearId] = watch(["brandId", "modelId", "yearId"])

  async function onSubmit(data: CarsForm){
    getTotalValue(
      Number(data?.brandId?.value),
      Number(data?.modelId?.value),
      data?.yearId?.value
    )
  }

  useEffect(() => {
    getBrands();
  },[])

  useEffect(() => {
    setValue("modelId", null!)

    if(watchBrandId?.value){
      getModels(Number(watchBrandId?.value))
    }
  },[watchBrandId])

  useEffect(() => {
    setValue("yearId", null!)
    if(watchModelId?.value){
      getYears(Number(watchBrandId?.value), Number(watchModelId?.value))
    }
  },[watchModelId])
  
  return (
      <Container>
      <Header>
        <Title>
          Tabela Fipe
        </Title>
        <SubTitle>
          Consulte o valor de um veículo de forma gratuita
        </SubTitle>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="brandId"
          control={control}
          render={({
            field: { name, value, onChange },
          }) => (
            <SelectComponent
              label="Marca"
              name={name}
              options={carsBrandOptions}
              onChange={onChange}
              value={value}
            />
          )}
        />
         <Controller
          name="modelId"
          control={control}
          render={({
            field: { name, value, onChange },
          }) => (
            <SelectComponent
              label="Modelo"
              name={name}
              options={carsModelOptions}
              onChange={onChange}
              value={value}
              isReadOnly={!watchBrandId}
            />
          )}
        />
        <Controller
          name="yearId"
          control={control}
          render={({
            field: { name, value, onChange },
          }) => (
            <SelectComponent
              label="Ano"
              name={name}
              options={carsYearOptions}
              onChange={onChange}
              value={value}
              isReadOnly={!watchModelId}
            />
          )}
        />
        <ButtonSection>
         <Button type="submit" disabled={!watchYearId}>Consultar preço</Button>
        </ButtonSection>
        </form>
      </Content>
      {
      carsValue && (
        <TotalValueComponent AnoModelo={carsValue.AnoModelo} Valor={carsValue.Valor} Modelo={carsValue.Modelo}/>
      )
    }
    </Container>
   
  )
}
