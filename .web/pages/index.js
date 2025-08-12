import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <Script src={`/js/snow.js`} strategy={`afterInteractive`}/>
  <VStack sx={{"bg": "#212529", "position": "sticky", "borderBottom": "0.25em solid ('#D3D3D3',)", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0", "width": "100%"}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Imagen pixel art de UN LOGO con mis iniciales.`} src={`dani_navbar.png`} sx={{"width": "3em", "height": "3em"}}/>
  <Text>
  {`Daniel González`}
</Text>
  <Spacer/>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Link as={NextLink} className={`nes-icon youtube is-medium`} href={`https://youtube.com/@mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
</Box>
  <Link as={NextLink} className={`nes-icon twitch is-medium`} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
  <Link as={NextLink} className={`nes-icon github is-medium`} href={`https://github.com/danigpas`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
</HStack>
</VStack>
  <Center>
  <VStack spacing={`4em`} sx={{"width": "100%"}}>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px", "paddingTop": "4em"}}>
  <Heading size={`lg`} sx={{"paddingBottom": "1em", "fontFamily": "Press Start 2P", "color": "#EA5940 !important"}}>
  {`Hi , I'm Daniel González `}
</Heading>
  <Flex direction={["column", "column", "column", "row", "row"]}>
  <Image alt={`Imagen pixel          art de Daniel gonzalez generada por chatgpt.`} src={`avatar_dani.png`} sx={{"width": "16em", "height": "16em", "marginRight": "2em"}}/>
  <VStack alignItems={`start`}>
  <Box className={`nes-balloon from-left is-dark`}>
  <Text>
  {`Desarrollador Back-End | Python`}
</Text>
</Box>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Tengo 2+ años de experiencia en creación y gestión de APIS en FastAPI, además de sincronización de Odoo y bbdd MySQL o PostGreSQL, con mi stack enfocado principalmente en `}
  <Text as={`span`} sx={{"color": "#EA5940 !important", "fontSize": "1em"}}>
  {`Python`}
</Text>
</Text>
  <Link as={NextLink} href={`https://www.linkedin.com/in/daniel-gonz%C3%A1lez-pascual-dev/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Mi Linkedin`}
</Button>
</Link>
</VStack>
</Flex>
</VStack>
  <VStack>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium star`}/>
  <Heading size={`md`} sx={{"color": "#EA5940 !important", "fontFamily": "Press Start 2P"}}>
  {`Proyectos`}
</Heading>
</HStack>
  <VStack>
  <Box className={`nes-container is-dark with-title`} sx={{"width": "100%", "alignItems": "start"}}>
  <Text className={`title`} sx={{"color": "#EA5940 !important"}}>
  {`Portfolio retro`}
</Text>
  <Flex direction={["column", "column", "column", "row", "row"]}>
  <Box sx={{"height": "14em", "width": "14em", "aspectRatio": "1", "marginRight": "2em"}}>
  <Image src={`/foto_portfolio_cuadrado.PNG`} sx={{"width": "auto", "height": "auto"}}/>
</Box>
  <VStack alignItems={`start`} sx={{"marginTop": "2em"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`En desarrollo`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Portfolio retro usando Reflex y una libreria retro sobre la Nintendo NES`}
</Text>
  <Image src={`reflex_logo.png`} sx={{"width": "3em", "height": "3em"}}/>
  <Spacer/>
  <Flex direction={["column", "column", "column", "row", "row"]} sx={{"alignItems": "start"}}>
  <Link as={NextLink} href={`https://github.com/Dani-Disofic/portfolio-retro`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Github`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Dani-Disofic/portfolio-retro`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Proyecto`}
</Button>
</Link>
</Flex>
</VStack>
</Flex>
</Box>
  <Box className={`nes-container is-dark with-title`} sx={{"width": "100%", "alignItems": "start"}}>
  <Text className={`title`} sx={{"color": "#EA5940 !important"}}>
  {`Web Protectora de Málaga`}
</Text>
  <Flex direction={["column", "column", "column", "row", "row"]}>
  <Box sx={{"height": "14em", "width": "14em", "aspectRatio": "1", "marginRight": "2em"}}>
  <Image src={`captura_prote.PNG`} sx={{"width": "auto", "height": "auto"}}/>
</Box>
  <VStack alignItems={`start`} sx={{"marginTop": "2em"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`En desarrollo`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Web desarrollada en Django sobre la Protectora de Animales y Plantas de Málaga`}
</Text>
  <Image src={`django_logo.png`} sx={{"width": "3em", "height": "3em"}}/>
  <Spacer/>
  <Flex direction={["column", "column", "column", "row", "row"]} sx={{"alignItems": "start"}}>
  <Link as={NextLink} href={`https://github.com/Dani-Disofic/web-prote`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Github`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/Dani-Disofic/web-prote`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Proyecto`}
</Button>
</Link>
</Flex>
</VStack>
</Flex>
</Box>
</VStack>
</VStack>
  <VStack>
  <VStack sx={{"bg": "#EA5940", "width": "100%"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium trophy`}/>
  <Heading size={`md`} sx={{"color": "#212529", "fontFamily": "Press Start 2P"}}>
  {`Experiencia`}
</Heading>
</HStack>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px", "paddingY": "4em"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium coin`}/>
  <Heading size={`lg`} sx={{"color": "#212529", "fontFamily": "Press Start 2P"}}>
  {`Disofic (2023 - actualmente)`}
</Heading>
</HStack>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium coin`}/>
  <Heading size={`lg`} sx={{"color": "#212529", "fontFamily": "Press Start 2P"}}>
  {`Relay (verano 2022)`}
</Heading>
</HStack>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium coin`}/>
  <Heading size={`lg`} sx={{"color": "#212529", "fontFamily": "Press Start 2P"}}>
  {`Carrefour (Junio-Septiembre 2021)`}
</Heading>
</HStack>
</VStack>
</VStack>
</VStack>
  <Box sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <VStack alignItems={`start`} className={`nes-container is-dark with-title`} sx={{"width": "100%"}}>
  <Text className={`title`} sx={{"color": "#EA5940 !important"}}>
  {`Formación académica`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`•Grado Superior DAW (Cursando actualmente) `}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`•Certificado de Profesionalidad IFCT 0609 Programación de Sistemas Informáticos `}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Ingeniería Informática en la Universidad de Málaga`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Bachillerato Científico-Tecnológico en IES Ben Gabirol`}
</Text>
</VStack>
</Box>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium like`}/>
  <Heading size={`md`} sx={{"color": "#EA5940 !important", "fontFamily": "Press Start 2P"}}>
  {`Mención especial a  Brais Moure y adeviento.dev`}
</Heading>
</HStack>
  <Flex direction={["column", "column", "column", "row", "row"]} sx={{"alignItems": "start", "spacing": "2em"}}>
  <Avatar name={`Brais Moure`} size={`2xl`} src={`logo_moure.jpeg`} sx={{"bg": "#212529", "padding": "2px", "border": "4px", "borderColor": ["#D3D3D3"], "marginRight": "0.5em", "marginBottom": "0.5em"}}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Soy ingeniero de software desde hace más de 15 años.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`En 2018 comencé a divulgar contenido sobre programación y desarrollo de software en redes sociales como `}
  <Text as={`span`} sx={{"color": "#EA5940 !important", "fontSize": "1em"}}>
  {`@mouredev`}
</Text>
  {`.`}
</Text>
  <Stack alignItems={`start`} direction={["column", "column", "column", "row", "row"]}>
  <Link as={NextLink} href={`https://youtube.com/@mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`YouTube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Twitch`}
</Button>
</Link>
  <Link as={NextLink} href={`https://adviento.dev/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Discord`}
</Button>
</Link>
</Stack>
</VStack>
</Flex>
</VStack>
  <HStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px", "paddingBottom": "2em"}}>
  <Center sx={{"width": "100%"}}>
  <VStack alignItems={`start`} spacing={`0.8em`}>
  <Text sx={{"fontSize": "0.8em", "marginBottom": "0px !important"}}>
  {`Portfolio Personal Retro `}
</Text>
  <Link as={NextLink} href={`https://github.com/danigpas/portfolio-retro`} isExternal={true} sx={{"fontSize": "0.8em", "color": "#D3D3D3", "textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {`Creado con `}
  <Box className={`nes-icon is-small heart`}/>
  {` por Daniel González © 2024 Todos los derechos reservados`}
</Link>
</VStack>
  <Spacer/>
  <Image alt={`Logo de un cocodrilo. `} className={`nes-avatar is-large`} src={`logo_cocodrilo.png`}/>
</Center>
</HStack>
  <Link as={NextLink} href={`https://github.com/danigpas/portfolio-retro`} isExternal={true} sx={{"alignItems": "end", "display": "flex", "marginTop": "0px !important", "textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <VStack>
  <VStack alignItems={`start`} className={`nes-balloon from-right is-dark`} sx={{"marginBottom": "2em"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Proyecto`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`en GitHub`}
</Text>
</VStack>
  <Box className={`nes-badge`}>
  <Text as={`span`} className={`is-error`} sx={{"fontSize": "0.8em"}}>
  {`2.1.0`}
</Text>
</Box>
</VStack>
  <Box className={`nes-octocat animate`}/>
</Link>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Portfolio retro`}
</title>
  <meta content={`Un portfolio realizado con pixel art`} name={`description`}/>
  <meta content={`ssets
oto_portfolio.PNG`} property={`og:image`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`Portfolio retro`} name={`og:title`}/>
  <meta content={`Un portfolio realizado con pixel art`} name={`og:description`}/>
  <meta content={`ssets
oto_portfolio.PNG`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@mouredev`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}
