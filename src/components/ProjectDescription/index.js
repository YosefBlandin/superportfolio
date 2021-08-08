import React from 'react';
import { IoLogoReact, IoLogoNodejs, IoLogoSass, IoCloseSharp } from 'react-icons/io5'
import imgExample from '../../images/preview.jpg';
import { container, container__close, header, img, title, technologies, descriptionContainer,technologies__span, pDescription } from "./styles.module.scss";





export const ProjectDescription = ({ showDescription, setShowDescription}) => {
    return (
        <article className={container} >
            <IoCloseSharp onClick={() => setShowDescription(!showDescription)} className={container__close} size="2rem"/>
            <header className={header}>
                <img className={img} src={imgExample}/>
                <h2 className={title}>Weather App</h2>
                <div className={technologies}>
                    <span className={technologies__span}>
                        <IoLogoReact size="2.7rem" />
                        <strong>React JS</strong>
                    </span>
                    <span className={technologies__span}>
                        <IoLogoNodejs size="2.7rem" />
                        <strong>Node JS</strong>
                    </span>
                    <span className={technologies__span}>
                        <IoLogoSass size="2.7rem" />
                        <strong>Sass</strong>
                    </span>
                </div>
            </header>
            <section className={descriptionContainer}>
                <p>JavaScript (/ˈdʒɑːvəˌskrɪpt/),[9] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[10] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.

As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, most notably servers and a variety of applications.

Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.</p>
            </section>
        </article>
    )
}