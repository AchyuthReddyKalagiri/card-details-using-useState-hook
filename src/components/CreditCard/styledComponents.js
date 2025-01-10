// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const CardBgContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 60vh;
  }
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png
');
  background-size: cover;
  border-radius: 20px;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`
export const InputBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 60vh;
  }
`

export const InputContainer = styled.div`
  height: 50%;
  width: 90%;
  box-shadow: 10px 10px 10px 10px #c3cad9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #fff;
`

export const Heading1 = styled.h2`
  color: #344e7a;
`

export const InputElement = styled.input``

export const ParagraphElement = styled.p`
  color: #fff;
`
export const ParagraphElement1 = styled.p`
  color: #fff;
  font-size: 30px;
`
