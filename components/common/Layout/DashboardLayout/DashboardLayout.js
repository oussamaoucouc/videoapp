import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  background-color: #eaeaea;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  }
`

export default function DashboardLayout({ children }) {
  return <Container>{children}</Container>
}
