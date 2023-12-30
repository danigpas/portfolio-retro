import reflex as rx
import adeviento_web.styles.styles as styles
from adeviento_web.styles.styles import Size, Color
from adeviento_web.components.header_text import header_text,experiencia_text


def partners() -> rx.Component:
    return rx.vstack(
        rx.vstack(
            header_text(
                "trophy",
                "Experiencia",
                False
            ),
            rx.vstack(
                
                experiencia_text("coin","Disofic (actualmente)",False),
                experiencia_text("coin","Relay (verano 2022)",False),
                experiencia_text("coin","Carrefour (Junio-Septiembre 2021)",False),
                
            
            # rx.responsive_grid(
            #     _partner_link(
            #         "avatar.jpg",
            #         "https://moure.dev",
            #         "Brais Moure"
            #     ),

                # _partner_link(
                #     "disofic.png",
                #     "https://mouredev.com/geeks",
                #     "DisOfic"
                # ),
                # _partner_link(
                #     "raiola.png",
                #     "https://mouredev.com/raiola",
                #     "Raiola Networks"
                # ),
                # _partner_link(
                #     "nuwe.png",
                #     "https://nuwe.io",
                #     "NUWE"
                # ),
                # columns=[1, 1, 2, 2],
                # spacing=Size.VERY_BIG.value
            #),
            padding_y=Size.VERY_BIG.value,
            style=styles.max_width_style,
            width="100%"
        ),
        bg=Color.ACCENT.value,
        width="100%"
    ),
    )

def _partner_link(image: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width="100%",
            height="100%",
            alt=alt
        ),
        href=url,
        is_external=True
    )
