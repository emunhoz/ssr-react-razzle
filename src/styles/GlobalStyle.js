import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #2c3136;
  --primary: #9a57bd;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  }
  body, html {
    background: #fff;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    color: var(--gray-dark);
  }
  #root {
    font-weight: normal;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    display: grid;
    min-height: 100vh;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: auto 1fr auto;
  }
  main {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0px 15px;
    width: 100%;
  }
`

export default GlobalStyle
