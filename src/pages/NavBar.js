import ChangingTextColor from "../components/ColorPallete";

function NavBar() {
    return <>
        <div class="flex-container">
            <div>
                <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % npm start this stupid website"></ChangingTextColor>
                <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % alright npm deploy i guess :("></ChangingTextColor>
            </div>
        </div>
    </>
}

export default NavBar;