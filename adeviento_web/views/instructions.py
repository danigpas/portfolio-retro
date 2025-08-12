import reflex as rx
import adeviento_web.constants as constants
import adeviento_web.styles.styles as styles
from adeviento_web.styles.styles import TextColor
from adeviento_web.components.button import button


def instructions() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(
                "Formación académica",
                class_name="title",
                color=TextColor.ACCENT.value
            ),
            rx.span(
                "•Grado Superior DAW (Cursando actualmente) "),
            rx.span(
                "•Certificado de Profesionalidad IFCT 0609 Programación de Sistemas Informáticos "),
            rx.span("• Ingeniería Informática en la Universidad de Málaga"),
            rx.span("• Bachillerato Científico-Tecnológico en IES Ben Gabirol"),
            # button(
            #     "Twitter",
            #     constants.TWITTER_URL
            # ),
            # rx.span(
            #     "• Al día siguiente realizaré el sorteo de forma pública y compartiré el ganador en la web y en Twitter/X."
            # ),
            # rx.span(
            #     "• ¡Vuelta a empezar! Publicaré un nuevo regalo y comenzará de nuevo el proceso."
            # ),
            class_name="nes-container is-dark with-title",
            align_items="start",
            width="100%"
        ),
        style=styles.max_width_style
    )
