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
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
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
  box-shadow: 10px 10px #d3d9e0;
`

export const InputContainer = styled.div``

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
