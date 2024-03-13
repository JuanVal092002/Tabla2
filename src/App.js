import React from 'react';
import './App.css';
import Busqueda from './Components/Busquedad';
import Selector from './Components/Selector';
import Tabla from './Components/Tabla';
import './App.css'


const App = () => {
  return (
    <div className="App">
      
      <Tabla
        names={[
          'Juan Daniel Gomez', 'María Enith Peralta', 'Carlos Daniel Aguas', 'Carlos Andres Gomez', 'Pedro Infante Valencia',
          'Ana Cecilia Rodriguez', 'Diego Andres Sarria', 'Sofía Valencia', 'Miguel Andres Paladinez', 'Lucía del Socorro Parra',
          'José Octavio Fernandez', 'Elena Casas', 'Antonio Aguilar', 'Isabel Bastidas', 'Fernando Arango',
          'Carmen Fernandez', 'Pablo Andres Ortiz', 'Luisa Fernanda Sanchez', 'Juan Carlos Pastas', 'Rosa Elvira Paredes'
        ]}
        descriptions={[
          'Estudiante de medicina interesado en la investigación científica.',
          'Profesora de matemáticas apasionada por la enseñanza.',
          'Administrativo en una empresa de tecnología.',
          'Psicóloga clínica con experiencia en terapia cognitivo-conductual.',
          'Músico aficionado y compositor en su tiempo libre.',
          'Ingeniero civil especializado en infraestructura urbana.',
          'Artista plástico reconocido por sus exposiciones en galerías locales.',
          'Escritor de novelas de ciencia ficción con varios libros publicados.',
          'Abogado dedicado a la defensa de los derechos humanos.',
          'Chef ejecutivo en un restaurante de alta cocina.',
          'Estudiante de historia interesado en la arqueología.',
          'Profesor de física apasionado por la divulgación científica.',
          'Investigador en biología molecular.',
          'Diseñador gráfico con experiencia en publicidad.',
          'Actriz de teatro reconocida por sus interpretaciones.',
          'Estudiante de economía interesada en la macroeconomía.',
          'Maestro de inglés en una escuela secundaria.',
          'Artista de música electrónica con varios discos lanzados.',
          'Contadora pública especializada en finanzas corporativas.',
          'Arquitecto con experiencia en diseño sostenible.'
        ]}
      />
    </div>
  );
};

export default App;
