import elon from "/Elon.webp";
import ImgHTML from "/ImgHTML.png";
import ImgCss from "/ImgCSS.png";
import ImgReact from "/ImgReact.png";
import ImgJS from "/ImgJS.png";
import algorithm from "/algorithm.png";
import angular from "/angular.png";
import cicd from "/cicd.png";
import design from "/design.png";
import docker from "/docker.png";
import graphQL from "/graphQL.png";
import redux from "/redux.jpg";
import tailwindcss from "/tailwindcss.webp";
import vuex from "/vuex.jpeg";
import webpack from "/webpack.png";

import CardMaker from "/src/components/Card/CardMaker"

import './App.css';

function App() {

  return (
    <>
      <div className="root">
        <div className="card_container">
          <CardMaker className="card_image_photo" src={elon} content={"Кендус Станислав Владиславович"} contentClass="card_content_photo" />
        </div>
        <h1>Мои компетенции</h1>
        <div className="card_container">
          <CardMaker src={ImgHTML} content={"Основы языка, синтаксис"} />
          <CardMaker src={ImgCss} content={"Основы языка, синтаксис"} />
          <CardMaker src={ImgReact} content={"Основы библиотеки, синтаксис"} />
          <CardMaker src={ImgJS} content={"Базовый синтаксис и конструкции"} />
        </div>
        <h1>Хочу изучить</h1>
        <div className="card_container">
          <CardMaker src={angular} content={" Angular — фреймворк от Google для создания SPA-приложений на TypeScript, JavaScript, Dart с открытым исходным кодом."} />
          <CardMaker src={cicd} content={"Непрерывная интеграция (Continuous Integration, CI) и непрерывная поставка (Continuous Delivery, CD)."} />
          <CardMaker src={design} content={"Построение дизайн систем"} />
          <CardMaker src={docker} content={"Docker - платформа для разрбаотки приложений"} />
          <CardMaker src={graphQL} content={"GraphQL — это язык запросов и серверная среда для API с открытым исходным кодом."} />
          <CardMaker src={redux} content={"Redux — библиотека управления состоянием для приложений, написанных на JavaScript."} />
          <CardMaker src={tailwindcss} content={"TailwindCSS - это CSS-фреймворк, который позволяет создавать пользовательские интерфейсы при помощи набора готовых классов."} />
          <CardMaker src={algorithm} content={"Понимание алгоритмов и структур данных. Уверенное использование алгоритмов."} />
          <CardMaker src={vuex} content={"Vuex — паттерн управления состоянием + библиотека для приложений на Vue.js."} />
          <CardMaker src={webpack} content={"Webpack. Настройка и сборка с нуля."} />
        </div>
      </div>
    </>
  )
}

export default App
