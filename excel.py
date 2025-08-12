import pandas as pd

# Datos para cada semana

# Semana 1
datos_semana1 = [
    {"Área": "Baño", "Tarea": "Limpieza de inodoro, lavabo y grifos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Baño", "Tarea": "Limpieza de ducha/bañera, espejos y suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Encimeras, fregadero y superficies de trabajo", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Electrodomésticos externos y suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Quitar el polvo de muebles y objetos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Barrer/aspirar y fregar suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Limpieza de ventanas", "Frecuencia": "Cada 2-4 semanas", "Asignado": "Dani", "Comentarios": "Rotativa"},
    {"Área": "Dormitorio", "Tarea": "Recoger y quitar el polvo", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Cambio de sábanas y fundas", "Frecuencia": "Semanal/2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Recoger y quitar el polvo (escritorio, estanterías y objetos)", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Organización de papeles y revisión de estanterías", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 1: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 2: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
]
df_semana1 = pd.DataFrame(datos_semana1)

# Semana 2
datos_semana2 = [
    {"Área": "Baño", "Tarea": "Limpieza de inodoro, lavabo y grifos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Baño", "Tarea": "Limpieza de ducha/bañera, espejos y suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Encimeras, fregadero y superficies de trabajo", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Electrodomésticos externos y suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Quitar el polvo de muebles y objetos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Barrer/aspirar y fregar suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Limpieza de zócalos y rincones", "Frecuencia": "Cada 2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Recoger y quitar el polvo", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Cambio de sábanas y fundas", "Frecuencia": "Semanal/2 semanas", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Recoger y quitar el polvo (escritorio, estanterías y objetos)", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Organización de papeles y revisión de estanterías", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Limpieza profunda del escritorio", "Frecuencia": "Cada 2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 1: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 2: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
]
df_semana2 = pd.DataFrame(datos_semana2)

# Semana 3
datos_semana3 = [
    {"Área": "Baño", "Tarea": "Limpieza de inodoro, lavabo y grifos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Baño", "Tarea": "Limpieza de ducha/bañera, espejos y suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Encimeras, fregadero y superficies de trabajo", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Electrodomésticos externos y suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Quitar el polvo de muebles y objetos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Barrer/aspirar y fregar suelos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Limpieza de ventanas", "Frecuencia": "Cada 2-4 semanas", "Asignado": "Dani", "Comentarios": "Rotativa"},
    {"Área": "Dormitorio", "Tarea": "Recoger y quitar el polvo", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Cambio de sábanas y fundas", "Frecuencia": "Semanal/2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Recoger y quitar el polvo (escritorio, estanterías y objetos)", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Organización de papeles y revisión de estanterías", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 1: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 2: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
]
df_semana3 = pd.DataFrame(datos_semana3)

# Semana 4
datos_semana4 = [
    {"Área": "Baño", "Tarea": "Limpieza de inodoro, lavabo y grifos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Baño", "Tarea": "Limpieza de ducha/bañera, espejos y suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Encimeras, fregadero y superficies de trabajo", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Electrodomésticos externos y suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Cocina", "Tarea": "Limpieza profunda de electrodomésticos internos", "Frecuencia": "Cada 3-4 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Quitar el polvo de muebles y objetos", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Barrer/aspirar y fregar suelos", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Salón", "Tarea": "Limpieza de zócalos y rincones", "Frecuencia": "Cada 2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Recoger y quitar el polvo", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Dormitorio", "Tarea": "Cambio de sábanas y fundas", "Frecuencia": "Semanal/2 semanas", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Recoger y quitar el polvo (escritorio, estanterías y objetos)", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Organización de papeles y revisión de estanterías", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
    {"Área": "Despacho", "Tarea": "Limpieza profunda del escritorio", "Frecuencia": "Cada 2 semanas", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 1: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Raquel", "Comentarios": ""},
    {"Área": "Areneros", "Tarea": "Arenero 2: Limpieza completa", "Frecuencia": "Semanal", "Asignado": "Dani", "Comentarios": ""},
]
df_semana4 = pd.DataFrame(datos_semana4)

# Crear un Excel con 4 hojas
with pd.ExcelWriter("planificacion_limpieza.xlsx") as writer:
    df_semana1.to_excel(writer, sheet_name="Semana 1", index=False)
    df_semana2.to_excel(writer, sheet_name="Semana 2", index=False)
    df_semana3.to_excel(writer, sheet_name="Semana 3", index=False)
    df_semana4.to_excel(writer, sheet_name="Semana 4", index=False)

print("Archivo 'planificacion_limpieza.xlsx' creado correctamente.")
