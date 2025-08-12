import reflex as rx
import adeviento_web.constants as constants
import adeviento_web.styles.styles as styles
from adeviento_web.styles.styles import Size, TextColor
from adeviento_web.components.button import button


def header() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Hi , I'm Daniel González ",
            size="lg",
            padding_bottom=Size.DEFAULT.value
        ),
        rx.flex(
            rx.image(
                src="avatar_dani.png",
                alt="Imagen pixel          art de Daniel gonzalez generada por chatgpt.",
                width="16em",
                height="16em",
                margin_right=Size.BIG.value
            ),
            rx.vstack(
                rx.box(
                    rx.text("Desarrollador Back-End | Python"),
                    #rx.text("Especializado en Python , Flask y Django."),
                    class_name="nes-balloon from-left is-dark"
                ),
                rx.span(
                    "Tengo 2+ años de experiencia en creación y gestión de APIS en FastAPI, además de sincronización de Odoo y bbdd MySQL o PostGreSQL, con mi stack enfocado principalmente en ",
                    rx.span(
                        "Python",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value
                    ),
                   
                ),
                #rx.span(
                #    "Este proyecto está basado en la web de adviento.dev de Mouredev"
                #),
                # rx.span(
                #     "Su finalidad es ayudar a compartir conocimiento y fomentar el aprendizaje en comunidad."
                # ),
                button(
                    "Mi Linkedin",
                    constants.LINKEDIN_URL
                ),
                # rx.link(
                #     "#aDEViento2023",
                #     href=constants.ADEVIENTO_HASHTAG_URL,
                #     is_external=True,
                #     color=TextColor.TERTIARY.value
                # ),
                align_items="start"
            ),
            direction=styles.FLEX_DIRECTION
        ),
        padding_top=Size.VERY_BIG.value,
        style=styles.max_width_style
    )
