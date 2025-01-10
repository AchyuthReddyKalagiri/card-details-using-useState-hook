// Write your code here
import {useState} from 'react'
import {
  Container,
  CardBgContainer,
  CardContainer,
  InputContainer,
  InputBgContainer,
  InputElement,
  Heading,
  Heading1,
  ParagraphElement,
  ParagraphElement1,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  console.log(name)
  console.log(cardNumber)

  const onEnterName = event => setName(event.target.value)

  const onEnterNumber = event => setCardNumber(event.target.value)

  return (
    <Container>
      <CardBgContainer>
        <Heading>CREDIT CARD</Heading>
        <CardContainer data-testid="creditCard">
          {cardNumber.length > 0 ? (
            <ParagraphElement1 font-size="50px">{cardNumber}</ParagraphElement1>
          ) : (
            ''
          )}
          <ParagraphElement>CARDHOLDER NAME</ParagraphElement>
          {name.length > 0 ? (
            <ParagraphElement>{name.toUpperCase()}</ParagraphElement>
          ) : (
            ''
          )}
        </CardContainer>
      </CardBgContainer>
      <InputBgContainer>
        <InputContainer>
          <Heading1>Payment Method</Heading1>
          <InputElement
            type="text"
            placeholder="Card Number"
            onChange={onEnterNumber}
            value={cardNumber}
          />
          <br />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            onChange={onEnterName}
            value={name}
          />
        </InputContainer>
      </InputBgContainer>
    </Container>
  )
}

export default CreditCard
