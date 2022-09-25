interface Iprops {
    rotate: string;
}
const HamburgerButton = (props: Iprops) => {
    return (
        <div className="mx-3">
            <div className="w-9 h-[5px] bg-white m-[6px]"></div>
            <div className="w-9 h-[5px] bg-white m-[6px]"></div>
            <div className="w-9 h-[5px] bg-white m-[6px]"></div>

        </div>
    )
}

export default HamburgerButton;