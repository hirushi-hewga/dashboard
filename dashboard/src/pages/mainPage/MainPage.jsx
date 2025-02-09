import ClassComponent from '../../components_lesson/classComponent/classComponent'
// import * as Buttons from './../../Buttons'
import { SolidButton, OutlineButton, AnimatedButton } from '../../Buttons'
import './MainPage.css'

const MainPage = () => {
    let titleText = "Dashboard project"

    const btnClickHandler = (text) => {
        //const text = document.getElementById("titleText").value
        titleText = text
        console.log(titleText)
    }

    return (
            <div className='container'>
                <SolidButton text="Solid green button" color="magenta" />
                <div className="title">
                    <h1>{titleText}</h1>
                </div>
                <div className="content">
                    <p>Content text</p>
                </div>
                <ClassComponent text="Class component props text" />
                <div>
                    <SolidButton text="Solid red button" color="red" />
                </div>
                <div>
                    <OutlineButton text="Go to new page" />
                </div>
                <div>
                    <AnimatedButton />
                </div>

                <div>
                    <input id="titleText" />
                    <button onClick={() => btnClickHandler("btn click text")}>Change title</button>
                </div>
            </div>
    );
}

export default MainPage
