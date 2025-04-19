import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import MainNavbar from "../components/Navbar.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MainNavbar">
                <MainNavbar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews