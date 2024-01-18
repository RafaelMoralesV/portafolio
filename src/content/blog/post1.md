---
title: "Primeras impresiones de Astro."
description: "Mi experiencia trabajando con el framework para páginas basadas en contenido."
pubDate: "January 14 2024."
heroImage: "/post_img.webp"
tags: ["Opinion"]
---

## ¿Cómo llegué a trabajar con Astro?

Astro llegó a mi como varias otras herramientas; un video de youtube, una investigación
rápida, y un eventual descarte por desinterés. ¿Para qué iba a aprender otro framework
de JavaScript que iba a terminar tirado en un año? Sin embargo, eventualmente llegué
a ver proyectos hechos con este, y en general dejaron una impresión muy fuerte sobre
lo bello que puede llegar a ser.

No soy un desarrollador front end experto. Mis diseños en general son
normalitos, y los efectos y experiencia de usuario no son asombrosos. La gran
razón es que en general **los frameworks de JavaScript no me interesan para nada.**
Mi interacción con el desarrollo web suele ser por el Back End ya que todo lo
que ocurre ahí me parece mil veces más interesante.

Sin embargo, no todo es back end, y con el propósito de mostrar mi trabajo,
tuve que crear un portafolio sencillo. Pensé en un par de ideas para esto; _"Ah,
quizás debería probar y jugar con Rust, utilizando Yew y WASM."_, _"Quizás podría
sacar algo rápido con Laravel."_, _"A lo mejor por fin es momento de hacer algo
con Go Lang"_, etc. etc.

Teniendo una multitud de opciones solo en el mundo de JavaScript, ¿Por qué
optar por Astro? La respuesta en mi caso fue: **es el framework que más me ofrece
por la menor cantidad de esfuerzo**, y con el mejor desempeño para lo que quiero
lograr.

## ¿Por qué Astro?

En su filosofía, Astro está hecho para páginas web basadas en Contenido, no en
funcionalidad. En la práctica esto significa que no vamos a ver contacto con
bases de datos, llamadas complejas a API's, o API's complejas hechas para este
servidor, y esto **es bueno**. Astro quita la complejidad y la sofisticación
que tanto plaga el desarrollo web de todas partes, y te entrega puntos de
entrada listos para empezar a evolucionar lo que quieres mostrar, y no el
cómo quieres mostrarlo.

**Esto es perfecto para un portafolio**, por ejemplo. Derrota totalmente el
propósito tener un desarrollo complejísimo que me demore una o dos semanas
de esfuerzo activo en mostrarme algo presentable, solo para escribir el
contenido en dos horas y olvidarme. Con Astro, los proyectos son **tan simples**
que demoré más en agarrar la motivación de trabajar en mi tiempo de descanso
para crear este portafolio, que en aprender el framework mismo.

La estructura de proyectos es muy simple, los comandos se explican solo, hay
templates **muy competentes** que son conseguibles _de forma gratuita_, y solo te
queda jugar con la configuración para hacerlos realmente tuyos.

## Comparemos con otras opciones:

Quiero contrastar esto con las opciones con las que contrasté en un inicio:

### De haber utilizado **Rust**, hubiera tenido que:

1. Aprender un framework nuevo, que probablemente es mucho más complejo
   y sofisticado que la mayoría, con sus propias reglas y mañas.
2. Diseñar rutas, mecanismos, funcionalidades, y vistas desde cero.
3. Subir mi proyecto en un formato binario que no necesariamente es
   soportado facilmente por muchos servicios de Hosting.

### Y hubiera ganado:

1. Un proyecto que solo yo puedo mantener.
2. Un ejecutable de alta velocidad (pero no tan rápido como un sitio
   estático!)

### De haber utilizado **Laravel**, hubiera tenido que:

1. Generar un nuevo proyecto, diseñar rutas.
2. Tener que modificar un proyecto desde una base enorme llena de funciones
   que no necesito.

### Y hubiera ganado:

1. Un enorme proyecto, lleno de Bloatware y funciones que no me sirven.
2. Una aplicación web que sinceramente es más lenta que el resto.
3. Una página web que es más o menos sencilla de subir.

### De haber utilizado **Go**, hubiera tenido que:

1. Aprender un lenguaje nuevo.
2. Aprender un framework nuevo de desarrollo.
3. Aprender a montar un servicio desde cero.

### Y hubiera ganado:

1. Más o menos lo mismo de Rust, quizás más sencilla de mantener.
2. Probablemente una migraña, debido al trabajo extra que implica.

### Finalmente; de haber utilizado algún **otro framework de JavaScript**, hubiera tenido que:

1. Utilizar JavaScript, wegh.

### Y hubiera ganado:

1. Un proyecto de JavaScript, con todo el Bloat y los dolores de cabeza
   que eso implica.

## ¿Qué hay de Astro?

Con estas comparaciones negativas, la pregunta natural es ¿cómo se contrasta este
framework para este tipo de tareas?

### ¿Qué tuve que hacer al momento de utilizar **Astro**?

1. No tuve que aprender mucho.
2. Tuve que buscar un template básico que me solucionara tres cuartas
   partes del proyecto por si mismo.

### Y, ¿Qué fue lo que gané con Astro?

1. Una página web (Semi?) estática, que es la solución más simple y
   rápida para este problema.
2. Conocimiento muy específico para este tipo de problemas.

## ¿Qué saco de esta breve experiencia?

Creo que Astro es la mejor herramienta para generar este tipo de
plataformas, y solucionar este tipo de problemas. Pero es necesario notar
que este es un problema hiper específico. No muchas personas necesitan una
solución similar, pues no muchas personas tienen algo que mostrar como yo lo
tengo que hacer para este portafolio. Sin embargo, la solución que ofrece es
_tan simple_ que el costo de aprender la herramienta es mínimo, y las ventajas
son múltiples.
